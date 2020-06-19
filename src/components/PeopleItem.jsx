import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

export class PeopleItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: {},
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((people) => this.setState({ people }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Fragment>
        <div className='card my-5'>
          <div className='card-header'>Studio Ghibli</div>
          <div className='card-body'>
            <h5 className='card-title'>{this.state.people.name}</h5>
            <p className='card-text'>{this.state.people.gender}</p>
            <p className='card-text'>{this.state.people.age}</p>
            <p className='card-text'>{this.state.people.eye_color}</p>
            <p className='card-text'>{this.state.people.hair_color}</p>
            <a href={this.state.people.url} className='btn btn-primary mx-1'>
              Go to Endpoint
            </a>
            <Link to='./'>
              <button className='btn btn-primary mx-1'>Go Back to People</button>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PeopleItem;
