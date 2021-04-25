import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home';
import Contact from './components/pages/contact';
import About from './components/pages/about';
import Navbar from './components/layout/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/pages/page-not-found';
import AddUser from './components/users/addUser';
import EditUser from './components/users/editUser';
import ViewUser from './components/users/viewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/view/:id" component={ViewUser} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
