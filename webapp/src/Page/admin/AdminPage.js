import React, {useState} from "react";
import Food from './ListRepetition.js';
import './AdminPage.css';
import './ListStyle.css';

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
                foodId: '',
                name: foodName,
                categories: foodCategory
            };

            dispatch(saveFood(inputData));

            resetErrors();
            resetForm();
        }
        ;
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
        <div>
            <div>
                <form onSubmit={addFood}>
                    <input
                        type="text"
                        value={foodName}
                        placeholder="음식 이름"
                        onChange={e => setFoodName(e.target.value)}
                    />
                    <div className="error_state">
                        {nameError}
                    </div>
                    <input
                        type="text"
                        value={foodCategory}
                        placeholder="카테고리"
                        onChange={e => setFoodCategory(e.target.value)}
                    />
                    <div className="error_state">
                        {categoryError}
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