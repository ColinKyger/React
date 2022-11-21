import React, { Component } from 'react';

class FilmsList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          list: [],
        }
    }

   getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((resolve) => resolve.json())
    .then((films) => {console.log(films);
      this.setState({ list: films });
     }).catch((error) => {console.log("error", error)})

    
   }

   componentDidMount() {
    console.log("App - Mount");
    this.getFilms()
   }

   render() {
    return <div>
        <ul>
        {this.state.list.map((film, index) => {
            return <li key={(film.id + index)}>{film.title}</li>
        })}
    </ul>;
    </div>
  }
}

export default FilmsList;