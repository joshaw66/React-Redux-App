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
        props.docs.map(docs => (
          <div id='MainContainer'>
            <div id ='Card'>
              <div id='CardHeader'></div>
              <div id='CardContent'>
                {docs.name}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    docs: state.book,
    error: state.error
  };
};

export default connect(mapStateToProps, {})(BookList); 