import { CreateMovie } from './components/CreateMovie';
import { MovieList } from './components/MovieList';
import './components/MovieList_styles/main.css';
import './components/CreateMovie_styles/input.css';

function App() {
  return (
    <div className="App">
    
      < CreateMovie />
      < MovieList />

    </div>    
  );
}

export default App;
