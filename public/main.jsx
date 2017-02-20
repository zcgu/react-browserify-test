import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render: function() {
    return <div>Something something Dark Side heihei</div>;
  }
});
 
ReactDOM.render(
  <App />,
  document.getElementById('container')
);