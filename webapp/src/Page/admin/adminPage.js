import React, {useState} from "react";
import Food from './listRepetition.js';

function AdminPage() {
    const [foodName, setFoodName] = useState('');
    const [foodCategory, setFoodCategory] = useState('');
    const [foods, setFoods] = useState([
        {name: '비빔밥', category: '한식'},
        {name: '짱장면', category: '중식'},
        {name: '사케동', category: '일식'},
        {name: '까르보나라', category: '양식'},
        {name: '떡볶이', category: '분식'}
    ]);

    const renderFoods = foods.map(food => {
        return (
            <Food food={food} key={foods.name}/>
        );
    });

    const addFood = (event) => {
      event.preventDefault();
      setFoods([
          ...foods,
          {
          name: foodName,
          category: foodCategory
      }])
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
            <div className="food">
                <table>
                    <tr>
                        <th>이름</th>
                        <th>카테고리1</th>
                    </tr>
                    <tr>
                        <th>{renderFoods}</th>
                        <th>{renderFoods}</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default AdminPage;