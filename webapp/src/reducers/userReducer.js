import { GET_USER, SAVE_USER, DELETE_USER, SELECT_USER} from "../actions/userAction";

// 초기값
const userInitialState = {
    lastId: 0,
    users: [
        {
            num: 0,
            userId: 'Id',
            nickname: '닉네임',
            password: '비밀번호'
        }
    ]
}

export default function userReducer(state = userInitialState, action) {
    console.log("아래는 action.data")
    console.log(action.data)
    console.log("아래는 state")
    console.log(state)
    switch (action.type) {
        case GET_USER:
            return {
                lastId: state.lastId,
                users: action.data
            }

        case SAVE_USER:
            return {
                lastId: state.lastId + 1,
                users: state.users.concat({
                    ...action.inputData,
                    num: state.lastId + 1,
                })
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(row =>
                    row.userId !== action.inputData.userId),
                lastId: state.lastId -1
            }

        default:
            return state
    }
}