import React, {useState} from "react";
import ListRepetition from './listRepetition.js';
import './adminPage.css';
import './listStyle.css';
import AdminSidebar from './adminComponent/adminSidebar';
import {useDispatch} from "react-redux";
import {saveFood} from "../../actions";

function AdminPage() {
    const [foodId, setFoodId] = useState('');
    const [foodName, setFoodName] = useState('');
    const [foodCategory, setFoodCategory] = useState('');

    //Error
    const [idError, setIdError] = useState('');
    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');

    const dispatch = useDispatch();

    const addFood = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const inputData = {
                id: foodId,
                name: foodName,
                mainCategory: foodCategory
            };

            saveFood(inputData).then(result => {
                dispatch(result);
            }).catch(err => {
                throw err;
            })

            resetErrors();
            resetForm();
        }
        ;
    }


    // 필수 입력란 검사
    const validateForm = () => {
        resetErrors();

        let vaildated = true;

        if (!foodId) {
            setIdError('아이디를 입력해주세요.');
            vaildated = false;
        }

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

    // 에러 메시지 초기화
    const resetErrors = () => {
        setIdError('');
        setNameError('');
        setCategoryError('');
    };

    // 입력란 초기화
    const resetForm = () => {
        setFoodId('');
        setFoodName('');
        setFoodCategory('');
    };

    return (
        <div className="admin_page_body">
            <div className={"sidebar"}>
                <AdminSidebar/>
            </div>
            <div className="food_table">
                <form onSubmit={addFood}>
                    <div className="input_name">
                        <h5>ID</h5>
                        <input
                            type="text"
                            value={foodId}
                            placeholder="아이디"
                            onChange={e => setFoodId(e.target.value)}
                        />
                        <div className="error_state">
                            {idError}
                        </div>
                    </div>
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
                <ListRepetition/>
            </div>
        </div>
    );
};


export default AdminPage;