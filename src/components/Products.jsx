var React = require('react');
var Product = require('./Product.jsx');

var Products = React.createClass({
  getInitialState: function() {
    return {
      products: []
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get("http://localhost:3030/js/products.json", function (result) {
      var Section = result.response.section;
      var OneColSections = Section.one_column_frame_v1.sections;
      var MasonryItems = OneColSections[1].event_masonry_v1.items;


      this.setState({
        products: MasonryItems
      });
    }.bind(this));
  },
  render:function(){
    var productItems = this.state.products.map(function(item){
        if(item.event_v1){
          var FormattedImageUrl = item.event_v1.event.image_url.replace("{width}x{height}","300x300");
          var product = item.event_v1.event;
          return <Product src={FormattedImageUrl} title={product.name} price={product.price} description={product.event_highlights} key={product.id}/>;
        }
    });

    var productCell = {
        margin: 0,
        padding: 0
    }

    return (
      <div className="row no-pad" style={productCell}>
        {productItems}
      </div>
    );

  }
});

module.exports = Products;
