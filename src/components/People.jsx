import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {

    fetch(`https://ghibliapi.herokuapp.com/people/`)
      .then((res) => res.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  }

  render() {
    const people = this.state.people.map((ppl) => {
      return (
          <div key={ppl.id}>
            <div className='card my-5'>
              <div className='card-header'>Studio Ghibli</div>
              <div className='card-body'>
                <h5 className='card-title'>{ppl.name}</h5>
                <p className='card-text'>{ppl.age}</p>
                <Link to={`/people/${ppl.id}`} className='btn btn-primary'>
                  Show Item
                </Link>
              </div>
            </div>
          </div>
      );
    });
    return <Fragment>{people}</Fragment>;
  }
}

export default People;
