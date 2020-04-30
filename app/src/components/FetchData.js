import React from "react";
import { connect } from "react-redux";
import { getBookData } from '../actions/action';


function FetchButton(props) {
  const handleFetchData = e => {
    e.preventDefault();
    props.getBookData();
  };
  return (
    <>
      {props.isFetching ? (
        <div>Fetch LOTR Book Data</div>
      ) : (
        <button variant="contained" color="primary" onClick={handleFetchData}>
          Show LOTR Data
        </button>
      )}
    </>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching
  };
};

export default connect(mapStateToProps, { getBookData })(FetchButton);
