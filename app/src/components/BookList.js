import React from "react";
import { connect } from "react-redux";


function BookList(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.book.map(book => (
          <div>
  
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    book: state.book,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(BookList); 