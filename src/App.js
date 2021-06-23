import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { MovieDetails } from './pages/MovieDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="max-w-screen-2xl mx-auto pt-8">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
