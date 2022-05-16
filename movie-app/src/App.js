import { MovieList } from './components/Movies/llista/MovieList';
import './components/Movies/llista/main.css';
import './components/Movies/form_binding/movieForm.css';
// import { ChangeImage } from './components/ChangeImage/Main/ChangeImage';
// import './components/ChangeImage/Main/changeImage.css';
// import './components/ChangeImage/Preview/preview.css';
import './components/Movies/form_binding/bind_preview.css';

function App() {
  return (
    <div className="App">
      < MovieList />
      {/* <ChangeImage /> */}
    </div>    
  );
}

export default App;
