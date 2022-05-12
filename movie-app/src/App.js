import { MovieList } from './components/llista/MovieList';
import './components/llista/MovieList_styles/main.css';
import './components/form/MovieForm.css';
import { ChangeImage } from './components/ChangeImage/ChangeImage';
import './components/ChangeImage/ChangeImage.css';

function App() {
  return (
    <div className="App">
      {/* < MovieList /> */}
      <ChangeImage />
    </div>    
  );
}

export default App;
