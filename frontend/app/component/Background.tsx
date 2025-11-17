"use client";
import React, { useEffect, useRef } from 'react';

interface Thread {
  id: number;
  type: 'warp' | 'weft'; // sợi dọc / sợi ngang
  x?: number;
  y?: number;
  color: string;
  width?: number;
  height?: number;
  pattern?: number;
}

const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const threadsRef = useRef<Thread[]>([]);
  const animationIdRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  // Màu sắc truyền thống Chăm + ánh kim
  const chamColors = [
    '#C41E3A', // đỏ son
    '#FFD700', // vàng kim
    '#000000', // đen tuyền
    '#FFFFFF', // trắng tinh
    '#50C878', // xanh ngọc
    '#8B4513', // nâu đất
  ];

  // Tạo gradient ánh kim
  const createMetallicGradient = (color1: string, color2: string) => {
    return `linear-gradient(90deg, 
      ${color1}00 0%, 
      ${color1}44 20%, 
      ${color2}88 50%, 
      ${color1}44 80%, 
      ${color1}00 100%)`;
  };

  // Tạo họa tiết Chăm (thoi, tam giác)
  const createPattern = (ctx: CanvasRenderingContext2D, width: number, height: number, hue: number) => {
    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = 60;
    patternCanvas.height = 60;
    const pctx = patternCanvas.getContext('2d')!;
    
    pctx.fillStyle = `hsl(${hue}, 80%, 60%)`;
    // Hình thoi Chăm
    pctx.beginPath();
    pctx.moveTo(30, 10);
    pctx.lineTo(45, 30);
    pctx.lineTo(30, 50);
    pctx.lineTo(15, 30);
    pctx.closePath();
    pctx.fill();

    // Viền vàng
    pctx.strokeStyle = '#FFD700';
    pctx.lineWidth = 1.5;
    pctx.stroke();

    return ctx.createPattern(patternCanvas, 'repeat');
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d')!;
    ctx.globalAlpha = 0.15;

    // Resize handler
    const handleResize = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Khởi tạo sợi dọc (warp threads) - cố định
    const initWarpThreads = () => {
      const warpCount = Math.floor(canvas.width / 25);
      for (let i = 0; i < warpCount; i++) {
        threadsRef.current.push({
          id: i,
          type: 'warp',
          x: i * 25 + 12.5,
          color: chamColors[i % chamColors.length],
        });
      }
    };

    initWarpThreads();

    let weftId = 1000;
    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp;
      const delta = timestamp - timeRef.current;

      // Tạo sợi ngang (weft) mỗi 1.2s
      if (delta > 1200) {
        const hue = Math.random() * 360;
        const gradient = createMetallicGradient(
          chamColors[Math.floor(Math.random() * chamColors.length)],
          chamColors[Math.floor(Math.random() * chamColors.length)]
        );

        threadsRef.current.push({
          id: weftId++,
          type: 'weft',
          y: Math.random() * canvas.height,
          color: gradient,
          height: Math.random() * 3 + 2,
          pattern: hue,
        });
        timeRef.current = timestamp;
      }

      // Vẽ nền
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Vẽ sợi dọc (warp) - rung nhẹ như đang căng
      threadsRef.current
        .filter(t => t.type === 'warp' && t.x)
        .forEach(thread => {
          const offset = Math.sin(timestamp * 0.001 + thread.id) * 0.5;
          ctx.strokeStyle = thread.color;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(thread.x! + offset, 0);
          ctx.lineTo(thread.x! + offset, canvas.height);
          ctx.stroke();
        });

      // Vẽ sợi ngang (weft) - di chuyển và dệt
      threadsRef.current = threadsRef.current.filter(thread => {
        if (thread.type === 'weft' && thread.y !== undefined) {
          const speed = 0.8 + Math.random() * 0.4;
          thread.y += speed;

          // Xóa nếu ra khỏi màn hình
          if (thread.y! > canvas.height + 50) return false;

          // Tạo hiệu ứng dệt: sợi ngang "lướt qua" sợi dọc
          ctx.save();
          ctx.globalAlpha = 0.3;
          
          // Gradient hoặc pattern
          if (thread.pattern !== undefined) {
            const pattern = createPattern(ctx, 60, 60, thread.pattern);
            if (pattern) {
              ctx.fillStyle = pattern;
              ctx.fillRect(0, thread.y! - thread.height!/2, canvas.width, thread.height);
            }
          } else {
            const grad = ctx.createLinearGradient(0, thread.y!, canvas.width, thread.y!);
            grad.addColorStop(0, thread.color.replace(')', ', 0)').replace('linear-gradient(90deg, ', ''));
            grad.addColorStop(0.5, thread.color.replace(/[^,]+, ([^,]+),/, 'rgba(255,255,255,0.6),'));
            grad.addColorStop(1, thread.color.replace(')', ', 0)').replace('linear-gradient(90deg, ', ''));
            ctx.fillStyle = grad;
            ctx.fillRect(0, thread.y! - thread.height!/2, canvas.width, thread.height);
          }

          // Hiệu ứng ánh kim lấp lánh
          ctx.globalAlpha = 0.1;
          ctx.fillStyle = '#FFD700';
          for (let i = 0; i < canvas.width; i += 80) {
            const sparkleX = i + (timestamp * 0.1) % 80;
            ctx.beginPath();
            ctx.arc(sparkleX, thread.y!, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
          return true;
        }
        return true;
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      threadsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #fff8f0 0%, #f5e6d3 100%)', // nền giấy lụa
      }}
    />
  );
};

export default Background;
