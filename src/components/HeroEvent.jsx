var React = require('react');

var StandardEvent = React.createClass({
  render: function(){
    var meta = {
        color: 'red',
        fontSize: 12,
        textAlign: 'center',
        padding: 0,
        paddingBottom: 5,
        margin: 0
    };

    var desc = {
        fontSize: 13,
        textAlign: 'center',
        padding: 0,
        margin: 0
    }
    var title = {
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 0,
        marginBottom: 0,
        marginTop: 5,
        textAlign: 'center'
    }

    var eventWrapper = {
      padding: 0,
      margin: 0,
      backgroundColor: '#FFFFFF',
      marginBottom: 2
    }

    return(
      <div style={eventWrapper} className="col-sm-6 col-xs-12 col-md-6 col-lg-6">
        <div><img width="100%" src={this.props.src}/></div>
        <div style={title}>{this.props.title}</div>
        <div style={desc}>{this.props.description}</div>
        <div style={meta}>{this.props.meta}</div>
      </div>
    )
  }
});

module.exports = StandardEvent;
