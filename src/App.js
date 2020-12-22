import './App.css';
import Home from './components/Home'
import CharaterShow from './components/CharaterShow'
import StartPage from './components/StartPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';
process.env.CI = false
const App = () => {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={StartPage} />
        <Route path="/searchbar" component={Home} />
        <Route exact path="/char/:userid" component={CharaterShow} />
      </Router>
    </div>
  );
}

export default App;
