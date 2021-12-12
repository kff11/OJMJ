import {DELETE_FOOD, GET_FOOD, SAVE_FOOD} from '../actions/index';
const initialState = {
    foods: [
        {
            id: 1,
            name: '음식명',
            mainCategory: '카테고리',
            status: 'ABLE',
            selectCount: 0
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

            return {
                foods: state.foods.concat(action.saveData)
            }
        case DELETE_FOOD:
            return {
                ...state,
                foods: state.foods.filter(row =>
                    row.id !== action.id)
            }
        default:
            return state
    }
}