import React from "react";
import { connect } from "react-redux";
import { getBookData } from '../actions/action';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 12px;
  padding: .5%;
  color: black;
  background-color: gold;

  :hover {
    color: red;
    font-style: italic;
  }
`



function FetchButton(props) {
  const handleFetchData = e => {
    e.preventDefault();
    props.getBookData();
  };
  return (
    <>
      {props.isFetching ? (
        <div></div>
      ) : (
        <Button variant="contained" color="primary" onClick={handleFetchData}>
          Click the One Ring
        </Button>
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
