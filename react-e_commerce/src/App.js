import './App.scss';
import React from 'react';
import HomePage from './Pages/HomePage/homepage.component';
import {Route, Switch,Redirect} from 'react-router-dom';
import Shop from './Pages/shop/shop.component';
import Header from './Component/header/header.jsx';
import firebase from "firebase";
import {createUserProfileDocument} from './firebase/firebase.util';
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";
import {connect} from 'react-redux';
import  {userAction} from './redux/user.action';
import {userSelector} from './App.utility'
import cartCheckout from './Component/cart-checkout/cart-checkout.component';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    unSubscribeUserAuthentication = null;

    componentDidMount() {
        this.unSubscribeUserAuthentication = firebase.auth().onAuthStateChanged(async user => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef && userRef.onSnapshot(snapshot => {
                    this.props.setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data()
                    });
                });
            } else {
                this.props.setCurrentUser(null);
            }
        });
    }


    componentWillUnmount() {
        this.unSubscribeUserAuthentication();
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Header/>
                <div className="mb-lg-5"/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/checkout" component={cartCheckout}/>
                    <Route exact path="/sign-in" render={()=>this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUp/>}/>
                </Switch>
            </div>
        );
    }

}


const mapStateToProps = state =>({
    currentUser :  userSelector(state)
})

const mapDispatchToProps = dispatch =>({
    setCurrentUser : (user) => dispatch(userAction(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
