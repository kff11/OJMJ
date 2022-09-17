import React from 'react';
import './App.css';
import Header from "./common/component/header";
import MainPage from "./Page/main/mainPage";
import RestaurantListPage from "./Page/restaurant_list/restaurantListPage";
import RestaurantDetailPage from "./Page/restaurant_detail/restaurantDetail";
import AdminPage from "./Page/admin/adminPage";
import SignUp from "./Page/sign_up/signUpPage";
import UserProfile from "./Page/user_profile/userProfilePage";
import UsersManage from "./Page/admin/usersManage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/admin" component={AdminPage} />
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/user/profile" component={UserProfile}/>
                    <Route exact path="/resaurantlist" component={RestaurantListPage}/>
                    <Route exact path="/resaurantdetail" component={RestaurantDetailPage}/>
                    <Route exact path="/usersmanage" component={UsersManage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
