import './App.scss';
import  React from 'react';
import HomePage from './Pages/HomePage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './Pages/shop/shop.component';
import Header from './Component/header/header.jsx';
import SignIn from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import firebase from "firebase";

class App extends  React.Component{
    constructor() {
        super();
        this.state={
            currentUser:null
        }
    }

    unSubscribeUserAuthentication = null;
    componentDidMount() {
        this.unSubscribeUserAuthentication = firebase.auth().onAuthStateChanged(user=>{
            this.setState({currentUser : user})
           console.log(user);
        });
    }

    componentWillUnmount() {
        this.unSubscribeUserAuthentication();
    }

    render(){
        return (
            <div style={{display:'flex', flexDirection:'column' }}>
                <Header currentUser={this.state.currentUser}/>
                <div className="mb-lg-5"/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/shop" component={Shop}/>
                    <Route exact path="/sign-in" component={SignIn}/>
                </Switch>
            </div>
        );
    }

}

export default App;
