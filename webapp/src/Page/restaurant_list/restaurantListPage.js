import React from "react";
import "./restaurantList.css";

const restaurantListPage = () => {
    return (
        <div className="restaurant_content">
            <h1>선택한 음식명</h1>
            <div className="restaurant_list">
                <ul className="restaurant_list_item">
                    <li>
                        <h5>업체명</h5>
                        <h5>주소: 서울특별시 어쩌구 저쩌구 여기는 어디인가</h5>
                        <h5>전화번호:</h5>
                    </li>
                    <li>
                        <h5>업체명</h5>
                        <h5>주소:</h5>
                        <h5>전화번호:</h5>
                    </li>
                    <li>
                        <h5>업체명</h5>
                        <h5>주소:</h5>
                        <h5>전화번호:</h5>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default restaurantListPage;