import '../slider/styles/slider_modern.css'
import '../slider/styles/slider_mobile.css'
import '../slider/styles/slider_buttons.css'
import { useEffect, useState } from 'react'

export function Slider (props) {

    const [index, setIndex] = useState(0);
    // eslint-disable-next-line
    const [favList, setFavList] = useState(props.favList);
    // exemple amb setTimeOut -->
    const [isAuto, setIsAuto] = useState(true);
    
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

    // exemple amb setTimeOut -->
    // useEffect(()=>{
    //     if(isAuto){
    //         setIndex(nextSlide, 2000);
    //     }
    //     },[index, isAuto]
    //     // posar onClick al botó, es passa paràmetre isAuto perquè puguis parar i executar
    // );

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

    const showSlide=(key)=>{
        let slideIndex = key
        setIndex(slideIndex)
    };

    return (
        <div className='slider_card'>

                <div className='dots'>{props.favList.map((movie, key) => 
                <div className={key === index ? "dot active_dot" : "dot"} onClick={()=>showSlide(key)}></div>)}</div>

            {props.favList ? props.favList.map((movie, key) =>

                <>{key === index ? 

                    <div className="favData">
                        <div className='slider_info'>
                            {/* <h1>FAVORITES <span className='slide_number'>{`${index+1}/${props.favList.length}`}</span></h1>                     */}
                            {/* <h1>FAVORITES</h1>                     */}
                        </div>
                        <div className='slider_img'>
                            <div onClick={prevSlide} className='left_img_zone'>
                                <button className="left_arrow"><i class="fa-solid fa-angle-left"></i></button>
                            </div>
                            <div onClick={nextSlide} className='right_img_zone'>
                                <button className="right_arrow"><i class="fa-solid fa-angle-right"></i></button>
                            </div>

                            <img src={movie.imgURL} alt="movie cover"/>                           
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