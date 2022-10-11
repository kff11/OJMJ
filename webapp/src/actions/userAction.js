//Action Type
import axios from "axios";

export const GET_USER = 'GET_USER';
export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SELECT_USER = 'SELECT_USER';

export const getUser = (num, userId, nickname) => ({
    type: GET_USER,
    inputData: {
        num: num,
        userId: userId,
        nickname: nickname
    }
})

export const saveUser = (inputData) => ({
    type: SAVE_USER,
    inputData: {
        num: inputData.num,
        userId: inputData.userId,
        nickname: inputData.nickname,
        password: inputData.password
    }
})

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    inputData: {
        userId: userId
    }
})

export const selectUser = (userId, nickname, password) => ({
    type: SELECT_USER,
    userId: userId,
    nickname: nickname,
    password: password
})