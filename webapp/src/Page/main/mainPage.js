import React, {useEffect, useState} from "react";
import './main.css';
import {hitFood, getFood} from "../../actions";
import {useDispatch, useSelector} from "react-redux";


const MainPage = () => {
    const {foods} = useSelector(state => state.foodReducer);
    const [randomFood, setRandomFood] = useState({name: "시작을 눌러주세요."});
    const dispatch = useDispatch();
    /*const hitFood = (selected.id == 1) ? {setText:"시작!"}:{setText: selected.name};*/

    //랜덤
    const onStartRandomFood = () => {
        const randomIdx = Math.floor(Math.random() * foods.length);
        const result = foods[randomIdx];
        setRandomFood(result);
    }
    const onSelectFood = () =>  {
        if(!randomFood.id) {
            return;
        }
        hitFood(randomFood.id).then(result => {
            dispatch(result);
        }).catch(err => {
            throw err;
        });
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
        <div className="main_contents">
            <h1>{randomFood.name}</h1>
            <button onClick={onStartRandomFood}>start</button>
            <button onClick={onSelectFood}>선택!</button>
        </div>
    );
}

export default MainPage;