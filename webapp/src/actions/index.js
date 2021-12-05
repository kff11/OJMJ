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
export const saveFood = (saveData) => ({
    type: SAVE_FOOD,
    saveData: {
        food_id: saveData.food_id,
        food_name: saveData.food_name,
        food_main_category: saveData.food_main_category
    }
});

export const deleteFood = (foodId) => ({
    type: DELETE_FOOD,
    food_id: foodId
});