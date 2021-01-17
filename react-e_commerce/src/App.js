import './App.scss';
import HomePage from './Pages/HomePage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import Shop from './Pages/shop/shop.component';

function App() {
  return (
 <>
 <Switch>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/shop" component={Shop}/>
 </Switch>
 </>
  );
}

export default App;
