import response from './helpers/response';
import NavBar from './components/NavBar/NavBar'
import ResultsPage from './components/ResultsPage/ResultsPage';
import './App.css';

const App = () => {
  console.log(response);

  return (
    <div className="app">
      <NavBar />
      <ResultsPage />
    </div>
  );
};

export default App;
