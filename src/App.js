
import { Route, Switch } from 'react-router';
import './App.css';
import Chart from './Pages/Charts/Chart';
import { DataProvider } from './Context/DataContext';

function App() {
  return (
    <main className="App">
      <DataProvider>
        <Switch>
          <Route exact path="/" component={Chart} />
        </Switch>
      </DataProvider>
    </main>
  );
}

export default App;
