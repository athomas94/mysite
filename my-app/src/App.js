import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/Navigation';
import Banner from './Components/Banner';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
    </div>
  );
}

export default App;
