import './App.scss';
import React from 'react';
import HomePage from './Pages/HomePage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './Pages/shop/shop.component';
import Header from './Component/header/header.jsx';
import firebase from "firebase";
import {createUserProfileDocument} from './firebase/firebase.util';
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

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
            console.log(user);
            if (user) {
                const userRef = await createUserProfileDocument(user);
                console.log(userRef);
                userRef && userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                this.setState({currentUser: null});
            }
        });
    }


    componentWillUnmount() {
        this.unSubscribeUserAuthentication();
    }

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Header currentUser={this.state.currentUser}/>
                <div className="mb-lg-5"/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/sign-in" component={SignInAndSignUp}/>
                </Switch>
            </div>
        );
    }

}

export default App;
