import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Body from "./Body";
import './App.css'
import Searchpage from './Searchpage';
import Sortingpage from "./Sortingpage";
import Graphpage from "./Graphpage";
import Backtrackingpage from "./Bcktracking";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container-fluid">
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/searchpage" exact component={Searchpage} />
           <Route path="/sortingpage" exact component={Sortingpage} />
           <Route path="/graphpage" exact component={Graphpage} />
           <Route path="/backtrackingpage" exact component={Backtrackingpage} />
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
