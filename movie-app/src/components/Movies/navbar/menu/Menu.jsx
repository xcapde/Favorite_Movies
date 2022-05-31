import '../menu/menus.css'
import'../styles/navbar_mobile.css'

export function Menu(){
    return(
        <div className="nav">
            <a className='search_menu'>
                <span className='nav_icon'><i className="fa-solid fa-magnifying-glass"></i></span>
                <span className='nav_name'> Search</span></a>

            <a><span className='nav_icon'><i class="fa-solid fa-globe"></i></span>
                <span className='nav_name'> Explore</span></a>

            <a><span className='nav_icon'><i class="fa-solid fa-paper-plane"></i></span>
                <span className='nav_name'> Contact</span></a>

            <a><span className='nav_icon'><i class="fa-solid fa-user"></i></span>
                <span className='nav_name'> Login</span></a>
        </div>
    )
}