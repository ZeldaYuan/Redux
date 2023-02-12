import React from 'react';

class SearchInputForm extends React.Component {
  state = {
    searchtitle: '',
    error: '',
  }

  onInputChange = (event) => {
    this.setState({
      searchtitle: event.target.value
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const searchtitle = this.state.searchtitle;
    const error = this.validate(searchtitle);
    this.setState({ error });
    if (error.length > 0) return;
    this.props.onSubmit(searchtitle);
    this.setState({ searchtitle: '', error: '' });
  }

  validate = (searchtitle) => {
    if (!searchtitle)
    return 'Title is required!';
    return '';
  }

  render() {
    return (
      <form className='search' onSubmit={this.onFormSubmit}>
        <div className='flex'>
          <input
            id='searchtitle'
            className={ this.state.error ? 'error' : '' }
            name='searchtitle'
            type='text'
            value={this.state.searchtitle}
            placeholder={this.props.placeholder}
            onChange={this.onInputChange}
          />
          <button type='submit'>
            <i className='search icon'></i>
          </button>
        </div>
        <p className='error'>{ this.state.error }</p>
      </form>
    )
  }
}

export default SearchInputForm;
