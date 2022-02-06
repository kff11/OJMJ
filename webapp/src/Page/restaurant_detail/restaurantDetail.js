import React from "react";
import './restaurantDetail.css';
import Header from "../../common/component/header";

const restaurantDetailPage = () => {
    return (
        <div className={"restaurant_detail_page_body"}>
            <Header/>
            <div className={"restaurant_content"}>
                <div className={"restaurant_image"}></div>
                <div className={"restaurant_explain"}>
                    <div className={"restaurant_detail_explain"}>
                        <h3>선택한 식당 이름</h3>
                        <p>카테고리</p>
                        <h5>주소</h5>
                        <h5>전화번호</h5>
                        <h3>식당 설명</h3>
                    </div>
                    <div className={"restaurant_breakdown"}>
                        <ul className={"restaurant_breakdown"}>
                            <li>
                                <button>메뉴</button>
                                <ul>
                                    <li>연어덮밥</li>
                                    <li>가츠동</li>
                                </ul>
                            </li>
                            <li>
                                <button>리뷰</button>
                                <ul>
                                    <li>ㅇㅇㅇ님</li>
                                    <li>ㅁㅁㅁ님</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default restaurantDetailPage;