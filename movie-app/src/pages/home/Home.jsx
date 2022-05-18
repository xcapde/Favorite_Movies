import { Component } from 'react';
import { MovieList } from '../../components/Movies/llista/MovieList'

export class Home extends Component{
  render(){
    return  <div className='App'>
              <MovieList/>
            </div>
    }
}