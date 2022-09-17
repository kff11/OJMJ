import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteFood, getFood} from "../../actions";
import Pagination from "./adminComponent/pagination";
import '../admin/listStyle.css';

const ListRepetition = () => {
    const [limit, setLimit] = useState(10); //페이지당 게시물 수
    const [page, setPage] = useState(1); // 현재 페이지 번호
    const offset = (page - 1) * limit; //첫 게시물의 위치

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
                <label>
                    페이지 당 표시할 게시물 수:&nbsp;
                    <select
                        type="number"
                        value={limit}
                        onChange={({target: {value}}) => setLimit(Number(value))}
                    >
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>

                <main>
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
                        {foods.slice(offset, offset + limit).map(rowData => (
                            <tr key={rowData.id}>
                                <td>{rowData.id}</td>
                                <td>{rowData.name}</td>
                                <td>{rowData.mainCategory}</td>
                                <td>{rowData.status}</td>
                                <td>{rowData.selectCount}</td>
                                <td>
                                    <button onClick={() => onDelete(rowData.id)} className={"food_delete_btn"}>
                                        삭제
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </main>

                <footer>
                    <Pagination
                        total={foods.length}
                        limit={limit}
                        page={page}
                        setPage={setPage}
                    />
                </footer>
            </div>
        </div>
    )
};

export default ListRepetition;