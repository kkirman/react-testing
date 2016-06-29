var React = require('react');

var Product = React.createClass({
  render: function(){
    var productWrapper = {
      padding: 0,
      margin: 0
    }
    var title = {

    }

    var desc = {

    }

    var price = {

    }

    var originalPrice = {

    }

    return (
      <div style={productWrapper} className="col-sm-6 col-xs-12 col-md-4 col-lg-3">
        <img width="100%" height="100%" src={this.props.src}/>
        <p style={title}>{this.props.title}</p>
        <p style={desc}>{this.props.description}</p>
        <p style={price}>{this.props.price}</p>
        <p style={originalPrice}>{this.props.originalPrice}</p>
      </div>
    );
  }
});

module.exports = Product;
