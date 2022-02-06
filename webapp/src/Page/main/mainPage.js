import React, {useEffect, useState} from "react";
import './main.css';
import {hitFood, getFood} from "../../actions";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Header from "../../common/component/header";


const MainPage = () => {
    const [isShow, setIsShow] = useState(false);

    const {foods} = useSelector(state => state.foodReducer);
    const [randomFood, setRandomFood] = useState({name: "오늘 점심 뭐 먹지?"});
    const dispatch = useDispatch();

    //랜덤
    const onStartRandomFood = () => {
        const randomIdx = Math.floor(Math.random() * foods.length);
        const result = foods[randomIdx];
        setRandomFood(result);
    }
    const onSelectFood = () => {
        if (!randomFood.id) {
            return;
        }
        hitFood(randomFood.id).then(result => {
            dispatch(result);
        }).catch(err => {
            throw err;
        });
    }

    //버튼 변경
    const onButtonShow = () => {
        setIsShow(!isShow);
        onStartRandomFood();
    }

    //데이터 조회
    useEffect(() => {
        getFood().then(res => {
            dispatch(res);
        }).catch(err => {
            throw err;
        })
    }, [])

    return (
        <div className={"main_page_body"}>
            <Header/>
            <div className="main_contents">
                <div className={"food__name"}>
                    <h1>{randomFood.name}</h1>
                </div>
                <div className="ojmj_button">
                    {!isShow && <button
                        className="start_button"
                        onClick={onButtonShow}>시작!
                    </button>}
                    {isShow && <div className="switch_button">
                        <button
                            className="something_else_button"
                            onClick={onStartRandomFood}>다른거...
                        </button>
                        <Link to="/resaurantlist">
                            <button
                                className="select_button"
                                onClick={onSelectFood}>이거다!
                            </button>
                        </Link>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default MainPage;