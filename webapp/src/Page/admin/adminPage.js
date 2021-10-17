import React, {useState} from "react";
import { useTable } from "react-table";
import { columns, data } from "./foodDataSource";
import Food from './listRepetition.js';
import './listStyle.css';
import axios from "axios";

function AdminPage() {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,
    } = useTable({ columns, data,});
    const [foodName, setFoodName] = useState('');
    const [foodCategory, setFoodCategory] = useState('');
    const [foods, setFoods] = useState([
        {name: '비빔밥', category: '한식'},
    ]);


    const removeFood = (id) => {
        setFoods(foods.filter(food => {
            return food.id !== id;
        }));
    };

    const renderFoods = foods.length ? foods.map(food => {
        return (
            <Food
                food={food}
                key={foods.name}
                removeFood={removeFood}
            />
        );
    }):'추가된 음식이 없습니다';

    const addFood = (event) => {
        event.preventDefault();
        setFoods([
            ...foods,
            {
                id: Date.now(),
                name: foodName,
                category: foodCategory
            }]);
        setFoodName('');
        setFoodCategory('');
    };

    return (
        <div>
            <div>
                <form onSubmit={addFood}>
                    <input
                        type="text"
                        value={foodName}
                        placeholder="음식 이름"
                        onChange={e => setFoodName(e.target.value)}
                    /><br/>
                    <input
                        type="text"
                        value={foodCategory}
                        placeholder="카테고리"
                        onChange={e => setFoodCategory(e.target.value)}
                    /><br/>
                    <button type="submit">추가</button>
                </form>
            </div>
            <table {...getTableProps()} className="food">
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <table className="food">
                <tr>
                    <th>No.</th>
                    <th>이름</th>
                    <th>카테고리1</th>
                    <th>삭제</th>
                </tr>
                <tr>
                    {renderFoods}
                </tr>
            </table>
        </div>
    );
}

export default AdminPage;