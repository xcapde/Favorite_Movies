import '../menu/menus.css'
import'../styles/navbar_mobile.css'

export function Menu(){
    return(
        <div className="nav">
            <button className='search_menu'>
                <span className='nav_icon'><i className="fa-solid fa-magnifying-glass"></i></span>
                <span className='nav_name'> Search</span></button>

            <button><span className='nav_icon'><i className="fa-solid fa-globe"></i></span>
                <span className='nav_name'> Explore</span></button>

            <button><span className='nav_icon'><i className="fa-solid fa-paper-plane"></i></span>
                <span className='nav_name'> Contact</span></button>

            <button><span className='nav_icon'><i className="fa-solid fa-user"></i></span>
                <span className='nav_name'> Login</span></button>
        </div>
    )
}