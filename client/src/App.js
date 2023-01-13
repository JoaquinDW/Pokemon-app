import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import CreatePokemon from './components/CreatePokemon'
import Detail from './components/Detail';
import axios from 'axios'
axios.defaults.baseURL= "https://pokemon-app-umber-sigma.vercel.app/"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route  path='/home' component={Home}/>
        <Route  exact path='/pokemon' component={CreatePokemon}/>
        <Route  path='/pokemons/:id' component={Detail} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
