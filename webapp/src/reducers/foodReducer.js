import {DELETE_FOOD, SAVE_FOOD} from '../actions/index';

const initialState = {
    lastId: 1,
    foods: [
        {
            foodId: 1,
            name: '음식명',
            categories: '카테고리'
        }
    ]
}

export default function foodReducer(state = initialState, action) {
    switch (action.type){
        case SAVE_FOOD:
            return {
                lastId: state.lastId + 1,
                foods: state.foods.concat({
                    ...action.saveData,
                    foodId: state.lastId + 1,
                })
            }
        case DELETE_FOOD:
            return {
                ...state, foods: state.foods.filter(row =>
                row.foodId !== action.foodId)
            }
        default:
            return state
    }
}