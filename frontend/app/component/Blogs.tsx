"use client";

import React from 'react';

const Blogs = () => {
    const blogs = [
        {
            title: 'Làng Mỹ Nghiệp phát huy giá trị thổ cẩm Chăm',
            content: 'Nghệ nhân Đạt Thị Nam hướng dẫn phụ nữ kỹ thuật dệt hoa văn cổ thổ cẩm Chăm Mỹ Nghiệp',
            imageUrl: 'https://images.baodantoc.vn/uploads/2023/Th%C3%A1ng%205/Ng%C3%A0y_26/Nga/My%20Nghiep%201.jpg',
            link: 'https://baodantoc.vn/lang-my-nghiep-phat-huy-gia-tri-tho-cam-cham-1685073785936.htm',
        },
        {
            title: 'Mỹ Nghiệp - vùng văn hóa Chăm lộng lẫy những sợi chỉ đủ màu',
            content: 'Ký ức plei Caklaing thăng trầm nghề thổ cẩm Chăm',
            imageUrl: 'https://ninhphuoc.ninhthuan.gov.vn/portal/Photos/2023-03-09/4ed771794c8083bdz4167420677830_99a451cdc05e5126288db9c20ebe8240-min.jpg',
            link: 'https://ninhphuoc.ninhthuan.gov.vn/portal/Pages/2023-3-9/My-Nghiep--vung-van-hoa-Cham-long-lay-nhung-soi-ch8p98kq.aspx',
        },
        {
            title: 'Khám phá làng dệt Mỹ Nghiệp, một vùng văn hóa Chăm lộng lẫy',
            content: 'Những nét đặc sắc trong tinh hoa nghề dệt làng Mỹ Nghiệp',
            imageUrl: 'https://mia.vn/media/uploads/blog-du-lich/kham-pha-lang-det-my-nghiep-mot-vung-van-hoa-cham-long-lay-2-1657965660.jpg',
            link: 'https://mia.vn/cam-nang-du-lich/kham-pha-lang-det-my-nghiep-mot-vung-van-hoa-cham-long-lay-7462',
        },
        {
            title: 'Làng dệt Mỹ Nghiệp - bức tranh sắc màu của người Chăm',
            content: 'Thời gian thích hợp tham quan làng dệt Mỹ Nghiệp',
            imageUrl: 'https://ik.imagekit.io/tvlk/blog/2024/02/lang-det-my-nghiep-1.png?tr=q-70,c-at_max,w-500,h-300,dpr-2',
            link: 'https://www.traveloka.com/vi-vn/explore/destination/lang-det-my-nghiep/322848',
        },
        {
            title: 'Làng dệt Mỹ Nghiệp - bức tranh sắc màu của người Chăm',
            content: 'Quy trình làm nên những mẫu thổ cẩm đẹp.',
            imageUrl: 'https://thamhiemninhthuan.com/wp-content/uploads/2021/11/z2865260374878_55e02c5e8f9033b2cb0b453e2cdc9567-e1636975200467.jpg',
            link: 'https://thamhiemninhthuan.com/thong-tin-du-lich-ninh-thuan/484.html',
        },
        {
            title: 'Sắc màu văn hóa Chăm qua nghệ thuật dệt thổ cẩm Mỹ Nghiệp',
            content: 'Gìn giữ và lan tỏa nét văn hóa Chăm',
            imageUrl: 'https://thuvienninhthuan.vn/Upload/2024/11/05/sac%20mau%20van%20hoa%20cham.jpg_2024Thg1105_034825910(1).jpg',
            link: 'https://thuvienninhthuan.vn/tin-tuc-1297-sac-mau-van-hoa-cham-qua-nghe-thuat-det-tho-cam-my-nghiep.html',
        },
    ];

    return (
        <div className="container mx-auto ml-4 py-8">
            <h1 className="text-xl font-bold mb-4 text-center">Blogs về Dệt Thổ Cẩm Chăm</h1>
            <div className="flex flex-nowrap overflow-x-auto gap-4">
                {blogs.map((blog, index) => (
                    <a key={index} href={blog.link} target='_blank' className="bg-gray-100 rounded-lg shadow-md overflow-hidden w-64 shrink-0">
                        <img className="w-full h-48 object-cover" src={blog.imageUrl} alt={blog.title} />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                            <p className="text-gray-700">{blog.content}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Blogs;