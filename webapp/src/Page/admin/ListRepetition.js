import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import foodReducer from "../../reducers/foodReducer";
import {deleteFood, getFood} from "../../actions";

const Food = () => {
    const {foods} = useSelector(state => state.foodReducer);

    const dispatch = useDispatch();

    const onDelete = (foodId) => dispatch(deleteFood(foodId));

    useEffect(() => {
        getFood().then(result => {
            dispatch(result);
        }).catch(err => {
            throw err;
        })
    }, [])

    return (
        <div>
            <div>
                <table className="food">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>이름</th>
                        <th>카테고리1</th>
                        <th>삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                    {foods.map(rowData => (
                        <tr>
                            <td>{rowData.food_id}</td>
                            <td>{rowData.food_name}</td>
                            <td>{rowData.food_main_category}</td>
                            <td>
                                <button onClick={() => onDelete(rowData.food_id)}>
                                    삭제
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Food;