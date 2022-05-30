import '../slider/styles/slider_darkGreenBlue.css'
import '../slider/styles/slider_mobile.css'
import '../slider/styles/slider_buttons.css'
import { useEffect, useState } from 'react'

export function Slider (props) {

    const [index, setIndex] = useState(0);
    // const [favList, setFavList] = useState(props.favList);


    useEffect(()=>{
        showToSlider();
        // setInterval(() => {
        //     setIndex(index+1)
        // }, 2000);

        },[]
    );

    const showToSlider = () => {
        // setFavList(props.favList)

        for (let i=0; i < props.favList.length; i++){
            console.log(props.favList[i].title)
            console.log(props.favList[i].imgURL)
            console.log(i)
        }
    };

    return (
        <div className="slider_card">
            <div className='slider_info'>
                    <h1>{`${props.favList.length} FAVORITE MOVIES`}</h1>
                </div>
            <div className="slider_img">
                
                {/* <img src='https://es.web.img3.acsta.net/medias/nmedia/18/90/27/81/20482778.jpg' alt="movie cover"/> */}
                {/* <img src={`${props.favList[slideIndex].imgURL}`} alt="movie cover"/> */}
                <img src="patatagran" alt="movie cover"/>
                <div className='left_img_zone'>
                    <button onClick={() => setIndex(index-1)} className="left_arrow"><i className="fa-solid fa-arrow-left"></i></button>
                </div>
                <div className='right_img_zone'>
                    <button onClick={() => setIndex(index+1)} className="right_arrow"><i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>

            <div className="slider_movie_info">
                <div className="slider_card_text">
                    {/* <h1>{`${props.favList[slideIndex].title}`}</h1> */}
                    <h1>{`${props.favList.title}`}</h1>
                </div>
                <div className='favZone'>
                    <button className="slider_favorite_button"><i className = "fa-solid fa-star"></i></button>
                    {/* onClick={()=>deleteFavorite(movie)} */}
                </div>
            </div>

        </div>
    )

}