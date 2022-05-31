import'../searcher/searcher.css'
import'../styles/navbar_mobile.css'

export function Searcher(){
    return(
        <div className="searcher">
            <input type="text" placeholder="Search..." />
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}