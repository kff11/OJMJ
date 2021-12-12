import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import foodReducer from "../../reducers/foodReducer";
import {deleteFood, getFood, saveFood} from "../../actions";

const ListRepetition = () => {
    const {foods} = useSelector(state => state.foodReducer);

    const dispatch = useDispatch();

    const onDelete = (foodId) => deleteFood(foodId).then(result => {
        dispatch(result);
    }).catch(err => {
        throw err;
    });

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
                        <th>분류</th>
                        <th>활성화<br/>상태</th>
                        <th>선택<br/>횟수</th>
                        <th>삭제</th>
                    </tr>
                    </thead>
                    <tbody>
                    {foods.map(rowData => (
                        <tr key={rowData.id}>
                            <td>{rowData.id}</td>
                            <td>{rowData.name}</td>
                            <td>{rowData.mainCategory}</td>
                            <td>{rowData.status}</td>
                            <td>{rowData.selectCount}</td>
                            <td>
                                <button onClick={() => onDelete(rowData.id)}>
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

export default ListRepetition;