var React = require('react');

/*
  Header
*/

var Header = React.createClass({

  render: function(){
    //this refers to the component instance
    //console.log(this.props);
    return (
      <header className="top">
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          day
        </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
    )
  }

});

module.exports = Header;
