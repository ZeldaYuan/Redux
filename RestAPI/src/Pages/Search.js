import React from 'react';

import Picture from './Picture';
import SearchInputForm from './SearchInputForm';
import {search} from '../actions/searchActions';
import { connect } from 'react-redux';

const Search = (props) => {
  /*const searchStatus = useSelector(state => state.status.search);
  const searchError = useSelector(state => state.status.searchError);
  const dispatch = useDispatch();
  const result = useSelector(state =>state.search);*/
  return(
  <main id='search-container'>
    <SearchInputForm
      placeholder='Search Pictures...'
      onSubmit={ (searchtitle) => props.search(searchtitle) }
    />
    {
      (props.searchStatus === 'SUCCESS')

      ? <Picture
         pictures ={ props.result.payload }
         //handleCollectionBtn ={ (pictureID) => props.saveCollection(pictureID) }
        />
      : null
    }

    {
      (props.searchStatus === 'PENDING')
      ? <section className='loading'>
        <img src='../../images/loading.gif' alt="On loading"/>
        </section>
      : null
    }

    {
      (props.searchStatus === 'ERROR')
      ? <section className='error'>
          <p className='error'>
            <i className="red exclamation triangle icon"></i>
            <h1>Wrong search </h1>
          </p>
        </section>
      : null
    }
  </main>
)
};
const mapStateToProps = (state) => (
  {
    searchStatus: state.status.search,
    searchError: state.status.searchError,
    result: state.search.result,

  }
);

const mapDispatchToProps = (dispatch) =>(
  {
    search(searchtitle) {
      dispatch(search(searchtitle))
    }
 }
)

export default connect(mapStateToProps, mapDispatchToProps)(Search);
