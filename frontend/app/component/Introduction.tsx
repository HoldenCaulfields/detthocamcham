"use client";

import React, { useEffect, useState } from "react";

const Introduction = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`
                transition-all duration-1000 ease-out transform
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                w-[90%] sm:w-4/5 md:w-1/2 max-w-3xl mx-auto fixed bottom-6 left-1/2 -translate-x-1/2 
                md:static md:translate-x-0 rounded-3xl shadow-xl
                bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200
                border border-stone-300 p-8
            `}
        >
            <div className="text-center text-3xl md:text-4xl font-extrabold text-amber-900 mb-4 tracking-tight">
                Nghề Dệt Thổ Cẩm
                <div className="text-lg font-medium text-stone-700 mt-1">Chăm Mỹ Nghiệp</div>
            </div>

            <div className="text-black text-sm md:text-base leading-relaxed font-light space-y-4">
                <p className="italic text-amber-700">
                    "Nghề dệt thổ cẩm Chăm Mỹ Nghiệp là một nét văn hóa truyền thống đặc sắc của đồng bào Chăm tại làng Mỹ Nghiệp, tỉnh Ninh Thuận. Trải qua bao thế hệ, nghề dệt không chỉ là phương kế sinh nhai mà còn là biểu tượng của bản sắc văn hóa, sự khéo léo và tinh hoa nghệ thuật của người Chăm."
                </p>

                <p>
                    Sản phẩm thủ công nơi đây nổi bật với hoa văn độc đáo, sắc màu trầm ấm đậm đà bản sắc dân tộc Chăm. Mỗi công đoạn – từ chọn nguyên liệu, nhuộm màu cho đến dệt vải – đều được thực hiện hoàn toàn bằng tay, yêu cầu sự tỉ mỉ, kiên nhẫn và tâm huyết của người thợ.
                </p>

                <p>
                    Các sản phẩm gồm khăn, túi, trang phục, đồ trang trí nội thất,... đều thể hiện tinh thần văn hóa sâu sắc, đồng thời góp phần tạo việc làm và giữ gìn truyền thống cho cộng đồng địa phương.
                </p>
            </div>
        </div>
    );
};

export default Introduction;
