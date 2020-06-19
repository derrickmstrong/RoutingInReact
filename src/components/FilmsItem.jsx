import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class FilmsItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {},
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((film) => this.setState({ film }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <div className='card my-5'>
          <div className='card-header'>Studio Ghibli</div>
          <div className='card-body'>
            <h5 className='card-title'>{this.state.film.title}</h5>
            <p className='card-text'>{this.state.film.description}</p>
            <p className='card-text'>Director: {this.state.film.director}</p>
            <p className='card-text'>Producer: {this.state.film.producer}</p>
            <p className='card-text'>
              Release Date: {this.state.film.release_date}
            </p>
            <p className='card-text'>RT Score: {this.state.film.rt_score}</p>
            <a href={this.state.film.url} className='btn btn-primary mx-1'>
              Go to Endpoint
            </a>
            <Link to='./'>
              <button className='btn btn-primary mx-1'>Go Back to Films</button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default FilmsItem;
