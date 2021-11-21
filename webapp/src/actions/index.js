//Action Type
export const SAVE_FOOD = 'SAVE_FOOD';
export const DELETE_FOOD = 'DELETE_FOOD';

//Action Create Function
export const saveFood = (saveData) => ({
    type: SAVE_FOOD,
    saveData: {
        foodId: saveData.foodId,
        name: saveData.name,
        categories: saveData.categories
    }
});

export const deleteFood = (foodId) => ({
    type: DELETE_FOOD,
    foodId: foodId
});