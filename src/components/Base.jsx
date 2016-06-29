var React = require('react');

var Base = React.createClass({


  render: function(){
    var baseWrapper = {
      margin: 0,
      padding: 0,
      backgroundColor: '#eeeeee'
    }

    return (
      <div style={baseWrapper}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Base;
