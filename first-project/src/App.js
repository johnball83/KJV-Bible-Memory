import About from './About';
import Contact from './Contact';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import KJV from './KJV-Project';
import RestaurantMenu from './Restaurant-Menu';
import ReminderList from './Reminder-List';
import Blog from './Blog';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/KJV-Project">
              <KJV />
            </Route>
            <Route path="/Restaurant-Menu">
              <RestaurantMenu />
            </Route>
            <Route path="/Reminder-List">
              <ReminderList />
            </Route>
            <Route path="/Blog">
              <Blog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
