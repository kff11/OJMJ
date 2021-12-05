import React, {useEffect, useState} from "react";
import Food from './ListRepetition.js';
import './AdminPage.css';
import './ListStyle.css';
import axios from "axios";

import {useDispatch} from "react-redux";
import {saveFood} from "../../actions";

function AdminPage() {
    const [foodName, setFoodName] = useState('');
    const [foodCategory, setFoodCategory] = useState('');

    //Error
    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');

    const dispatch = useDispatch();

    const addFood = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const inputData = {
                food_id: '',
                food_name: foodName,
                food_main_category: foodCategory
            };

            dispatch(saveFood(inputData));

            resetErrors();
            resetForm();
        };
    }


    const validateForm = () => {
        resetErrors();

        let vaildated = true;

        if (!foodName) {
            setNameError('음식명을 입력해주세요.');
            vaildated = false;
        }

        if (!foodCategory) {
            setCategoryError('카테고리를 입력해주세요.');
            vaildated = false;
        }

        return vaildated;
    };

    const resetErrors = () => {
        setNameError('');
        setCategoryError('');
    };

    const resetForm = () => {
        setFoodName('');
        setFoodCategory('');
    };

    return (
        <div className="adminPage">
            <div>
                <form onSubmit={addFood}>
                    <div className="input_name">
                        <h5>음식 이름</h5>
                        <input
                            type="text"
                            value={foodName}
                            placeholder="음식 이름"
                            onChange={e => setFoodName(e.target.value)}
                        />
                        <div className="error_state">
                            {nameError}
                        </div>
                    </div>
                    <div className="input_category">
                        <h5>카테고리</h5>
                        <input
                            type="text"
                            value={foodCategory}
                            placeholder="카테고리"
                            onChange={e => setFoodCategory(e.target.value)}
                        />
                        <div className="error_state">
                            {categoryError}
                        </div>
                    </div>
                    <button type="submit">
                        추가
                    </button>
                </form>
            </div>
            <Food/>
        </div>
    );
};


export default AdminPage;