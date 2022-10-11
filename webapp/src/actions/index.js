//Action Type
import axios from "axios";

export const GET_FOOD = 'GET_FOOD';
export const HIt_FOOD = 'HIt_FOOD';
export const SAVE_FOOD = 'SAVE_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';
export const SELECT_FOOD = 'SELECT_FOOD';

const serverUrl = "http://localhost:8081";
const foodUrl = "http://ec2-54-180-100-55.ap-northeast-2.compute.amazonaws.com:8081";

export const getFood = () => {
    return new Promise((resolve, reject) => {
        axios.get(foodUrl + '/api/food')
            .then(res => {
                if (res.data) {
                    resolve({
                        type: GET_FOOD,
                        data: res.data
                    });
                }
            }).catch(err => {
            reject(err);
        });
    });
}

export const hitFood = (foodId) => {
    return new Promise((resolve, reject) => {
        //query 형식
        //axios.get('url' + foodid) 실제로는 http://naver.com/id?id=foodid 이런식
        axios.get(foodUrl + '/api/food/' + foodId)
            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    resolve({
                        type: HIt_FOOD,
                        data: foodId
                    });
                }
            }).catch(err => {
            reject(err);
        });
    });
}

//Action Create Function
export const saveFood = (saveData) => {
    return new Promise((resolve, reject) => {
        //parameter 형식
        //axios.post('url', {데이터])
        axios.post(foodUrl + '/api/food',
            {
                id: saveData.id,
                name: saveData.name,
                mainCategory: saveData.mainCategory
            })
            .then(res => {
                resolve({
                    type: SAVE_FOOD,
                    saveData: res.data
                });
            }).catch(err => {
            console.log("Nope")
            reject(err);
        });
    });
}

export const deleteFood = (foodId) => {
    return new Promise((resolve, reject) => {
        axios.delete(foodUrl + '/api/food/'+ foodId)
            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    resolve({
                        type: DELETE_FOOD,
                        data: foodId
                    });
                }
            }).catch(err => {
            reject(err);
        });
    });
}

export const selectFood = (foodId, name) => ({
    type: SELECT_FOOD,
    id: foodId,
    name: name
})