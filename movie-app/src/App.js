import { MovieList } from './components/MovieList';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      < MovieList />
      
      <body>
      
      <div class="movies_list">
          
          <div class="movie_card">
              <div class="movie_img">
                  <img src="https://es.web.img2.acsta.net/medias/nmedia/18/90/04/41/20078157.jpg" alt="movie cover"/>
                  <p class="img_year">2022</p>
              </div>
              <div class="movie_info">
                  <div class="card_text">
                      <h1>Spider-man No Way Home</h1>
                      <h2>Acció, Superherois, Aventures, Familiar</h2>
                  </div>
                  <button class="card_button"><i class="fa-solid fa-star"></i></button>
              </div>
          </div>

      </div>

</body>
    </div>    
  );
}

export default App;
