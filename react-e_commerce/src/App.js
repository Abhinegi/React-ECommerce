import './App.scss';
import HomePage from './Pages/HomePage/homepage.component';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
 <>
 <Switch>
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/playstation" component={Playstation}/>
 </Switch>
 </>
  );
}

const Playstation = ()=>(<h1> Playstation </h1>);

export default App;
