import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state={searchTerm:''}
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.searchTerm);
    this.setState({searchTerm: ''});
  }

  render() {
    return(
      <form className='input-group' onSubmit={this.onFormSubmit}>
        <input
          placeholder='Enter a City Name'
          className='form-control'
          value={this.state.searchTerm}
          onChange={this.onInputChange}

          // no need to bind(this) in constructor for the following
          //onChange={this.onInputChange.bind(this)}
          //onChange={(event) => this.setState({ searchTerm: event.target.value })}
        />
        <span className='input-grp-btn'>
          <button type='Submit' className='btn btn-primary'>Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);