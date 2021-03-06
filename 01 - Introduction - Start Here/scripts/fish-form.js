var React = require('react');

/*
  FishForm
  <FishForm/>
*/

var FishForm = React.createClass({

  createFish: function(e){
    e.preventDefault();
    var fish = {
      name: this.refs.name.value,
      price: this.refs.price.value,
      status: this.refs.status.value,
      desc: this.refs.desc.value,
      image: this.refs.image.value
    };

    this.props.addFish(fish);
    this.refs.fishForm.reset();
  },

  render: function(){
    return (
      <form className="fish-edit" ref="fishForm" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name" />
        <input type="text" ref="price" placeholder="Fish Price" />
        <select ref="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold out!</option>
        </select>
        <textarea type="text" ref="desc" placeholder=""></textarea>
        <input type="text" ref="image" placeholder="URL to image"/>
        <button type="submit">+ Add Item</button>
      </form>
    )
  }

});

module.exports = FishForm;
