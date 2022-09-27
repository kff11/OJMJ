//Action Type
import axios from "axios";

export const GET_USER = 'GET_USER';
export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SELECT_USER = 'SELECT_USER';

export const getUser = (userId, nickname, password) => ({
    type: GET_USER,
    inputData: {
        userId: userId,
        nickname: nickname
    }
})

export const saveUser = (inputData) => ({
    type: SAVE_USER,
    inputData: {
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