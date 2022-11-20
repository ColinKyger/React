import { Component } from 'React'

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
    .then((films) => this.setState({ list: films }))
    .then(this.state.list = this.setState(films))
    .catch((error) => {console.log("error", error)})
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

// {this.state.list.map((item, index) => {
//     return <li key={item + index} >{item}</li>
//   })}