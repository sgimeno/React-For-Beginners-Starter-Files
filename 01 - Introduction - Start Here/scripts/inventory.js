var React = require('react');
var FishForm = require('./fish-form');

/*
  Inventory
*/

var Inventory = React.createClass({

  render: function(){
    return (
      <div>
        <h2>Inventory</h2>
        <FishForm {...this.props} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }

});

module.exports = Inventory;
