import {DELETE_FOOD, GET_FOOD, SAVE_FOOD} from '../actions/index';
const initialState = {
    foods: [
        {
            food_id: 1,
            food_name: '음식명',
            food_main_category: '카테고리'
        }
    ]
}

export default function foodReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FOOD:
            console.log(action);
            return {
                foods: action.data
            }
        case SAVE_FOOD:
            console.log("저장");
            console.log(action);
            console.log(state);
            console.log("저장 끝");
            console.log(state.foods.concat({...action.saveData}));

            return {
                foods: state.foods.concat(action.saveData)
            }
        case DELETE_FOOD:
            return {
                ...state,
                foods: state.foods.filter(row =>
                    row.food_id !== action.food_id)
            }
        default:
            return state
    }
}