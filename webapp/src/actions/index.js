//Action Type
import axios from "axios";

export const GET_FOOD = 'GET_FOOD';
export const SAVE_FOOD = 'SAVE_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';

export const getFood = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://ec2-54-180-100-55.ap-northeast-2.compute.amazonaws.com:8081/api/food')
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

//Action Create Function
export const saveFood = (saveData) => {
    return new Promise((resolve, reject) => {
        axios.post('http://ec2-54-180-100-55.ap-northeast-2.compute.amazonaws.com:8081/api/food',
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
        axios.delete('http://ec2-54-180-100-55.ap-northeast-2.compute.amazonaws.com:8081/api/food/'+ foodId)
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