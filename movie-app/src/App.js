import { MovieList } from './components/Movies/llista/MovieList';
import './components/Movies/llista/main.css';
import './components/Movies/form/movieForm.css';
// import { ChangeImage } from './components/ChangeImage/Main/ChangeImage';
// import './components/ChangeImage/Main/changeImage.css';
// import './components/ChangeImage/Preview/preview.css';
import './components/Movies/form/bind_preview.css';

function App() {
  return (
    <div className="App">
      < MovieList />
      {/* <ChangeImage /> */}
    </div>    
  );
}

export default App;
