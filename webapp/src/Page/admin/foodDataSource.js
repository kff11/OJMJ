import axios from "axios";

export const columns = [
    {
        Header: 'No.',
        accessor: 'number'
    },
    {
        Header: '이름',
        accessor: 'name'
    },
    {
        Header: '카테고리1',
        accessor: 'category'
    },
    {
        Header: '삭제',
        accessor: 'delete'
    }
];

export const data = [
    {
        name: '비빔밥',
        category: '한식'
    },
    /*axios.post('http://52.78.196.112:8080/api/food', {
        food_id: 'test',
        food_main_category: 'KoreaFood',
        //food_middle_category: 'BrothFood',
        food_sub_category: 'rice',
        food_name: '국밥'
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });*/
];
