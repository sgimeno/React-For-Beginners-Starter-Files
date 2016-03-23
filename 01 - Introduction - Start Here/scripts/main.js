var React = require('react');
var ReactDOM = require('react-dom');

var Header = require('./header');
var Order = require('./order');
var Inventory = require('./inventory');
/*
  App
*/

var App = React.createClass({

  render: function(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }

});



/*
  StorePicker
  return <StorePicker/> component
*/

var StorePicker = React.createClass({

  render: function(){
    var name = 'wes';
    return (
      <form className="store-selector">
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" required/>
        <input type="submit"/>
      </form>
    )
  }

});

ReactDOM.render(<App/>, document.getElementById('main'));
