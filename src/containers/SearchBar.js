import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state={searchTerm:''}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return(
      <form className='input-group'>
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

export default SearchBar;