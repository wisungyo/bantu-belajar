import React, { Component } from 'react';
import './App.css';
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/home/Home';
import HomeUser from './pages/homeUser/HomeUser';
import News from './pages/news/News';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Verification from './pages/verification/Verification';
import Syarat from './syaratKetentuan/index';
import Forget from './pages/forgetPasword/index';
import NewPass from './pages/newPassword/index';
import EditProfile from './component/editProfile/index';
import SearchResult from './pages/searchResult/SearchResult';
import PageProductDetail from './pages/pageProductDetail';
import PageSearchResult from './pages/pageSearchResult';
import PageEditProfile from './pages/pageEditProfile';
import PagePayment from './pages/pagePayment';
import PagePaymentVerif from './pages/pagePaymentVerif/index';
const history = createBrowserHistory({ basename: '' });

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <Router history={history}>
        
        <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={HomeUser} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/verification" component={Verification} />
            <Route exact path="/syarat-ketentuan" component={Syarat} />
            <Route exact path="/forget-password" component={Forget} />
            <Route exact path="/new-password" component={NewPass} />
            <Route exact path="/product" component={PageSearchResult} />
            <Route exact path="/news" component={News} />
            <Route exact path="/edit-profile" component={PageEditProfile} />
            <Route exact path="/product-detail" component={PageProductDetail} />
            {/* <Route exact path="/logout" component={Logout} /> */}
            <Route exact path="/payment" component={PagePayment} />
            <Route exact path="/payment-verification" component={PagePaymentVerif} />
          </div >   
        </Switch>

      </Router>
    </Provider>
  );
}
}
export default App;
