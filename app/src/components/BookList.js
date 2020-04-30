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
          <div id='MainContainer'>
            <div id ='Card'>
              <div id='CardHeader'>The Title of the Selected book is:</div>
              <div id='CardContent'></div>
            </div>
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