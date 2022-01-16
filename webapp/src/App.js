import React from 'react';
import './App.css';
import Header from "./common/component/header";
import MainPage from "./Page/main/mainPage";
import ResturantListPage from "./Page/restaurant_list/restaurantListPage";
import AdminPage from "./Page/admin/adminPage";
import Login from "./Page/login/loginPage";
import SignUp from "./Page/sign_up/signUpPage";
import UserProfile from "./Page/user_profile/userProfilePage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/admin" component={AdminPage} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/user/profile" component={UserProfile}/>
                    <Route exact path="/resaurantlist" component={ResturantListPage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
