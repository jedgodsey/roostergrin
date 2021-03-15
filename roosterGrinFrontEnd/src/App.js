import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Utility from './pages/Utility'
import Main from './pages/Main'

function App() {
  return (
    <>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/utility' component={Utility} />
        <Route path='/' component={Main} />
      </Switch>
    </>
  );
}

export default App;
