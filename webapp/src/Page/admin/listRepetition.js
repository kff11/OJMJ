import React from 'react';
import './listStyle.css';

const Food = ({food}) => {
    return (
        <div className="table-tr">
            <div className="food-name">{food.name}</div>
            <div className="food-category">{food.category}</div>
        </div>
    );
};

export default Food;