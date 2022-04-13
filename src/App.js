import { Route } from 'wouter'
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile'
import Header from './components/Header';

function App() {
  return (
    <div>
      <section>
      <Header/>
      <Route path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/about" component={About}/>
      </section>
    </div>
  );
}

export default App;
