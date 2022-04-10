import React from "react";
import "./restaurantList.css";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../../common/component/header";

const RestaurantListPage = () => {
    const {selectFoodItem} = useSelector(state => state.foodReducer);

    return (
        <div className={"restaurant_list_page_body"}>
            <Header/>
            <div className="restaurant_content">
                {/*이전 페이지에서 name 값을 어떻게 전달받을까?*/}
                <h1 key={selectFoodItem.id}>{selectFoodItem[0].name}</h1>
                <div className="restaurant_list">
                    <ul className="restaurant_list_item">
                        <Link to="/resaurantdetail">
                            <li>
                                <h5>업체명</h5>
                                <h5>주소: 서울특별시 어쩌구 저쩌구 여기는 어디인가</h5>
                                <h5>전화번호:</h5>
                            </li>
                        </Link>
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
        </div>
    );
}

export default RestaurantListPage;