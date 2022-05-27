import '../slider/styles/slider_darkGreenBlue.css'
import '../slider/styles/slider_mobile.css'
import '../slider/styles/slider_buttons.css'

export function Slider () {

    return (
        <div className="slider_card">
            <div className='slider_info'>
                    <h1>FAVORITE MOVIES</h1>
                </div>
            <div className="slider_img">
                
                
                <img src='https://es.web.img3.acsta.net/medias/nmedia/18/90/27/81/20482778.jpg' alt="movie cover"/>
                <div className='left_img_zone'>
                    <button className="left_arrow"><i class="fa-solid fa-arrow-left"></i></button>
                </div>
                <div className='right_img_zone'>
                    <button className="right_arrow"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                {/* <button onClick={()=>markFavorite(movie)} className={movie.movieIsFav? "favorite_button fav_true":"favorite_button"}><i className="fa-solid fa-star"></i></button> */}
            </div>

            <div className="slider_movie_info">
                <div className="slider_card_text">
                    <h1>titol</h1>
                </div>
                <div className='favZone'>
                    <button className="slider_favorite_button"><i className = "fa-solid fa-star"></i></button>
                </div>
            </div>

        </div>
    )

}