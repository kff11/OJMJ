import React from "react";
import Food from './listRepetition.js';

function adminPage() {

    const foods = [
        {name: '비빔밥', category: '한식'},
        {name: '짱장면', category: '중식'},
        {name: '사케동', category: '일식'},
        {name: '까르보나라', category: '양식'},
        {name: '떡볶이', category: '분식'}
    ];

    const renderFoods = foods.map(food => {
        return (
            <Food food={food}/>
        );
    });

    const onSubmit = () => {
        alert('submitted');
    };

    const onKeyUp = (event) => {
      if (event.keyCode === 13) {
          onSubmit();
      }
    }

    return (
        <div>
            <input onKeyUp={onKeyUp}/>
            <button onClick={onSubmit}>Submit</button>
            <br/>
            <div className="food">
                <table>
                    <tr>
                        <th>이름</th>
                        <th>카테고리1</th>
                    </tr>
                    <tr>
                        {renderFoods}
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default adminPage;