var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var browserHistory = ReactRouter.browserHistory;

var h = require('./helpers');
var Header = require('./header');
var Order = require('./order');
var Inventory = require('./inventory');

/*
  App
*/
var App = React.createClass({

  getInitialState: function(){
      return {
        fishes: {},
        order: {}
      }
  },

  addFish: function(fish){
    var timestamp = (new Date()).getTime();
    // update the state object
    this.state.fishes['fish-' + timestamp] = fish;
    // set the state
    this.setState({ fishes: this.state.fishes });
  },

  loadSamples: function(){
    this.setState({
      fishes: require('./sample-fishes')
    });
  },

  render: function(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" num="5000"/>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }

});

/*
  StorePicker
  return <StorePicker/> component
*/
var StorePicker = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  submit: function(e){
    e.preventDefault();
    // get the data from the input
    var storeId = this.refs.storeId.value;
    // transition from / to /store/:storeId
    this.context.router.push('/store/' + storeId);
  },

  render: function(){
    var name = 'sergi';
    return (
      <form className="store-selector" onSubmit={this.submit}>
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required/>
        <input type="submit"/>
      </form>
    )
  }

});

/*
  NotFound
*/

var NotFound = React.createClass({

  render: function(){
    return (
      <h1>404 Not Found</h1>
    )
  }

});

/*
  Routes
*/

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));
