import { MovieList } from '../../components/Movies/llista/MovieList'
import { Navbar } from '../../components/Movies/navbar/Navbar'
import { NavbarMobile } from '../../components/Movies/navbar/NavbarMobile'

export function Home(){
    return  <div className='App'>
              <Navbar/>
              <MovieList/>
              <NavbarMobile/>
            </div>
}