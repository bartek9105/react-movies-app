import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { MovieDetails } from './pages/MovieDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
