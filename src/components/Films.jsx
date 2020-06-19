import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/`)
      .then((res) => res.json())
      .then((films) => this.setState({ films }))
      .catch((err) => console.log(err));
  }

  render() {
    const films = this.state.films.map((film) => {
      return (
        <div key={film.id}>
          <div className='card my-5'>
            <div className='card-header'>Studio Ghibli</div>
            <div className='card-body'>
              <h5 className='card-title'>{film.title}</h5>
              <p className='card-text'>{film.description}</p>
              <Link to={`/films/${film.id}`} className='btn btn-primary'>
                Show Item
              </Link>
            </div>
          </div>
        </div>
      );
    });
    return <Fragment>{films}</Fragment>;
  }
}

export default Films;
