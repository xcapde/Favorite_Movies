import '../slider/styles/slider_darkGreenBlue.css'
import '../slider/styles/slider_mobile.css'
import '../slider/styles/slider_buttons.css'
import { useEffect, useState } from 'react'

export function Slider (props) {

    const [index, setIndex] = useState(0);
    // eslint-disable-next-line
    const [favList, setFavList] = useState(props.favList);
    
    useEffect(()=>{
        setFavList(props.favList)
        },[props.favList,]
    );

    const nextSlider=()=>{
        let newIndex = index + 1
        setIndex(newIndex)
        
        if (index >= props.favList.length -1){
            let newIndex = 0
            setIndex(newIndex)
        }
    };

    const prevSlider=()=>{
        let newIndex = index - 1
        setIndex(newIndex)
        
        if (index < 1){
            let newIndex = props.favList.length-1
            setIndex(newIndex)
        }
    };

    return (
        <div className='slider_card'>
            
            {props.favList ? props.favList.map((movie, key) =>
                <>{key === index ? 

                    <div className="favData">
                        <div className='slider_info'>
                            <h1>{`${index+1}/${props.favList.length} FAVORITE MOVIES`}</h1>
                        </div>
                        <div className='slider_img'>
                            <div onClick={prevSlider} className='left_img_zone'>
                                <button className="left_arrow"><i className="fa-solid fa-arrow-left"></i></button>
                            </div>
                            <div onClick={nextSlider} className='right_img_zone'>
                                <button className="right_arrow"><i className="fa-solid fa-arrow-right"></i></button>
                            </div>

                            <img key={key} src={movie.imgURL} alt="movie cover"/>
                        </div>
                        <div className="slider_movie_info">
                            <div className="slider_card_text">
                                <h1>{movie.title}</h1>
                            </div>
                        </div>
                    </div>

                    // {props.favList ? props.favList.map((movie, key) =>
                    //     <>{key === index ? <img key={key} src={movie.imgURL} /> : null}</>
                    // ) : null}

                : null}</>
            ) : null}

        </div>
    )

}