
import { Route, Switch } from 'react-router';
import './App.css';
import { DataProvider } from './Context/DataContext';
import DataDisplay from './Pages/DataDisplay/DataDisplay';

function App() {
  return (
    <main className="App">
      <DataProvider>
        <Switch>
          <Route exact path="/" component={DataDisplay} />
        </Switch>
      </DataProvider>
    </main>
  );
}

export default App;
