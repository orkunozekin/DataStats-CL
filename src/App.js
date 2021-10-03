
import { Route, Switch } from 'react-router';
import './App.css';
import Chart from './Pages/Charts/Chart';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" component={Chart} />
      </Switch>
    </main>
  );
}

export default App;
