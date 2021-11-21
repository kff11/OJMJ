import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import foodReducer from "../../reducers/foodReducer";
import {deleteFood} from "../../actions";

const Food = () => {
    const {foods} = useSelector(state => state.foodReducer);
    const {lastId} = useSelector(state => state.foodReducer);

    const dispatch = useDispatch();

    const onDelete = (foodId) => dispatch(deleteFood(foodId));

    return (
        <div>
            <div>
                <table className="food">
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>카테고리1</th>
                        <th>삭제</th>
                    </tr>
                    {lastId !== 0 ?
                        foods.map(rowData => (
                            rowData.foodId !== '' &&
                            <tr>
                                <td>{rowData.foodId}</td>
                                <td>{rowData.name}</td>
                                <td>{rowData.categories}</td>
                                <td>
                                    <button onClick={()=> onDelete(rowData.foodId)}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        )) :
                        <tr>
                            <td></td>
                            <td>작성된 글이 없습니다.</td>
                            <td>작성된 글이 없습니다.</td>
                        </tr>
                    }
                </table>
            </div>
        </div>
    )
};

export default Food;