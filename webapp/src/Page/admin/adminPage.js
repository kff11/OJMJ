import React, {useState} from "react";
import ListRepetition from './listRepetition.js';
import './adminPage.css';
import './listStyle.css';
import AdminSidebar from './adminComponent/adminSidebar';
import Modal from '../../common/component/modal';
import {useDispatch} from "react-redux";
import {saveFood} from "../../actions";
import {use} from "express/lib/router";

function AdminPage() {
    const [foodId, setFoodId] = useState('');
    const [foodName, setFoodName] = useState('');
    const [foodCategory, setFoodCategory] = useState('');

    //Error
    const [idError, setIdError] = useState('');
    const [nameError, setNameError] = useState('');
    const [categoryError, setCategoryError] = useState('');

    //Modal (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const dispatch = useDispatch();

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

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
            <div className={"inner"}>
                <div className={"sidebar"}>
                    <AdminSidebar/>
                </div>
                <div className="food_table">
                    <button className={"menu_add_btn"} onClick={openModal}>메뉴 추가</button>
                    <Modal
                        open={modalOpen}
                        close={closeModal}
                        header={"메뉴 추가"}>
                        <form className={"form_addfood"} onSubmit={addFood}>
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
                    </Modal>
                    <ListRepetition/>
                </div>
            </div>
        </div>
    );
};


export default AdminPage;