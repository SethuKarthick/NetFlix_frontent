
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, Redirect
} from "react-router-dom";
import Home from './pages/Home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

function App() {
  const user = false
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          { user ? <Home /> : <Redirect to="/register"/>}
        </Route>
        <Route path="/register">
        { !user ? <Register /> : <Redirect to="/"/>}
        </Route>
        <Route path="/login">
        { !user ? <Login /> : <Redirect to="/"/>}
        </Route>
        { user && (
          <>
            <Route path="/movies">
              <Home type="movies"/>
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
        
      </Switch>
    </Router>
  );
}

export default App;
