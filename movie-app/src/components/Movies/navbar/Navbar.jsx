import { Logo } from './logo/Logo';
import { Searcher } from "./searcher/Searcher";
import { Menu } from './menu/Menu';
import './styles/navbar.css'

export function Navbar() {

    return(
        <header className="navigation">
            
            <Logo/>
            <Searcher/>
            <Menu/>

        </header>
    );
}
