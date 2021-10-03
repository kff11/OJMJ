import React from 'react';

const Food = ({food , removeFood}) => {
    return (
        <React.Fragment>
            <td>num</td>
            <td className="food-name">{food.name}</td>
            <td className="food-category">{food.category}</td>
            <td>
                <button onClick={() => removeFood(food.id)}>삭제</button>
            </td>
        </React.Fragment>
    );
};

export default Food;