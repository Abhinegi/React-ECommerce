import './App.scss';
import HomePage from './Pages/HomePage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './Pages/shop/shop.component';
import Header from './Component/header/header.jsx';

function App() {
  return (
 <div style={{display:'flex', flexDirection:'column' }}>
    <Header/>
    <div className="mb-lg-5"/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={Shop}/>
    </Switch>
 </div>
  );
}

export default App;
