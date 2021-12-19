import React, {useEffect, useState} from "react";
import './main.css';
import {getFood} from "../../actions";
import {useDispatch, useSelector} from "react-redux";


const MainPage = () => {
    const {foods} = useSelector(state => state.foodReducer);
    const dispatch = useDispatch();

    const {text, setText} = useState('');

    this.state = {
        text: "시작!"
    };

    const hitFood = () => {
        const selected = foods[Math.floor(Math.random() * foods.length)];
        console.log(selected.name);

        this.setState({
            text: selected.name
        })
    }

    useEffect(() => {
        getFood().then(res => {
            dispatch(res);
        }).catch(err => {
            throw err;
        })
    }, [])

    return (
        <div className="main_contents">
            <h1>시작!</h1>
            <button onClick={hitFood}>start</button>
            <button>선택!</button>
        </div>
    )
        ;
}

export default MainPage;