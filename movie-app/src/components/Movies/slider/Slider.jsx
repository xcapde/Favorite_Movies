import '../slider/styles/slider_modern.css'
import '../slider/styles/slider_mobile.css'
import '../slider/styles/slider_buttons.css'
import { useEffect, useState } from 'react'

export function Slider (props) {

    const [index, setIndex] = useState(0);
    // eslint-disable-next-line
    const [favList, setFavList] = useState(props.favList);
    // const []
    
    useEffect(()=>{
        setFavList(props.favList)
        },[props.favList,]
    );

    useEffect(()=>{
        let interval = 4000;
        let intervalID = setInterval(()=>nextSlide(), interval);
        return() => clearInterval(intervalID);
    },[index]
    );

    const nextSlide=()=>{
        let newIndex = index + 1
        setIndex(newIndex)
        
        if (index >= props.favList.length -1){
            let newIndex = 0
            setIndex(newIndex)
        }
    };

    const prevSlide=()=>{
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
                            <h1>FAVORITE MOVIES <span className='slide_number'>{`${index+1}/${props.favList.length}`}</span></h1>
                        </div>
                        <div className='slider_img'>
                            <div onClick={prevSlide} className='left_img_zone'>
                                <button className="left_arrow"><i className="fa-solid fa-arrow-left"></i></button>
                            </div>
                            <div onClick={nextSlide} className='right_img_zone'>
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