import React from "react";
import './restaurantDetail.css';
import Header from "../../common/component/header";

const restaurantDetailPage = () => {
    return (
        <div className={"restaurant_detail_page_body"}>
            <Header/>
            <div className="restaurant_detail_content">
                <div className="detail_header">
                    <div className="restaurant_image"></div>
                    <h3>선택한 식당 이름</h3>
                    <h5>주소</h5>
                    <h5>전화번호</h5>
                </div>
                <div>
                    <h3>식당 설명</h3>
                    <ul className="restaurant_explain">
                        <li>
                            <button>메뉴</button>
                        </li>
                        <li>
                            <button>리뷰</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default restaurantDetailPage;