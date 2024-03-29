import React from 'react';
import HomeServicesItem from './HomeServicesItem';

const HomeServices = () => {
  return (
    <div className="home-services page-container py-4">
      <div className="row justify-content-center">
        <HomeServicesItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/certificate-icon-p3wgqj83iftdfzntt865n2pg6gyhr6ui9h6ri1cwns.png"
          title="Kinh Nghiệm 10 Năm"
        />
        <HomeServicesItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/truck-p3wgmo3zeyixpp9wdk1de1t89g063zi8ecmwh3368o.png"
          title="Giao Hàng Linh Hoạt"
        />
        <HomeServicesItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/setup-p3wgmyg7i4x39euvp6i9nh7asol7gnna3rt8r4nuc8.png"
          title="Lắp Đặt Miễn Phí"
        />
        <HomeServicesItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/support-p3wgt0irjp7m2y24bsrppy68m2qd2fp09r5w3boi8o.png"
          title="Hỗ Trợ Sau Bán Hàng"
        />
        <HomeServicesItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/warranty-p3wgnefgqbiyqs7o3vexbv64w8eg3ieptywhwu05eg.png"
          title="Bảo Hành 5 Năm"
        />
      </div>
    </div>
  );
};

export default HomeServices;
