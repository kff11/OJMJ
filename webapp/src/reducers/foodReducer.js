import { GET_FOOD, HIt_FOOD, SAVE_FOOD, DELETE_FOOD, SELECT_FOOD } from '../actions/index';

// 초기값
const initialState = {
    foods: [
        {
            id: 1,
            name: '음식명',
            mainCategory: '카테고리',
            status: 'ABLE',
            selectCount: 0
        }
    ],
    selectFoodItem: {}
}

export default function foodReducer(state = initialState, action) {
    /*console.log("아래는 action.data")
    console.log(action.data)
    console.log("아래는 state")
    console.log(state)*/
    switch (action.type) {
        case GET_FOOD:
            return {
                foods: action.data,
                selectFoodItem: action.data
            }

        case SAVE_FOOD:
            return {
                foods: state.foods.concat(action.saveData)
            }

        case DELETE_FOOD:
            return {
                ...state,
                foods: state.foods.filter(row =>
                    row.id !== action.id)
            }

        case HIt_FOOD:
            return state

        case SELECT_FOOD:
            return {
                selectFoodItem: state.foods.filter(row =>
                    row.id === action.id)
            }

        default:
            return state
    }
}