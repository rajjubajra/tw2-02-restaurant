import {
  BrowserRouter,
  Switch,
  Route 
} from 'react-router-dom';
import MenuBar from './components/MainMenu/MenuBar';
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import TableBooking from './pages/TableBooking';
import Gallery from './pages/Gallery';
import Location from './pages/Location';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/food-menu" component={FoodMenu} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/order" component={Order} />
        <Route path="/table-booking" component={TableBooking} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/location" component={Location} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
