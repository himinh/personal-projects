import React from 'react';
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem';

const HomeCollection = () => {
  return (
    <div className="home-collection">
      <div className="page-container">
        <HomeCollectionItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2020/02/chair.jpg"
          title="Bộ sưu tập Ghế"
          comment="Chương trình Khuyến Mãi Ra Mắt: Giảm 15%!"
          reverse={false}
        />

        <HomeCollectionItem
          image="https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/2020/02/wooden-chair-collections.jpg"
          title="Bộ Sưu Tập Hiện Đại!"
          comment="Hàng Mới"
          reverse={true}
        />
      </div>
    </div>
  );
};

export default HomeCollection;
