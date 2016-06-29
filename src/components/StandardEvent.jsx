var React = require('react');

var StandardEvent = React.createClass({
  render: function(){
    var meta = {
        color: 'red',
        fontSize: 12,
        textAlign: 'center'
    };

    var desc = {
        fontSize: 13,
        textAlign: 'center'
    }
    var title = {
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 0,
        marginBottom: 0,
        margin: 0,
        padding: 0,
        marginTop: 5,
        textAlign: 'center'
    }

    var eventCell = {
      padding: 0,
      margin: 0,
      marginBottom: 2,
      backgroundColor: '#FFFFFF'
    }

    var noGutter = {
      margin: 0,
      padding: 0
    }

    return(
      <div style={eventCell} className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
        <div className="row noGutter">
          <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
            <img width="100%" src={this.props.src}/>
          </div>
          <div className="noGutter col-xs-6 col-sm-8 col-lg-8 col-lg-8">
            <div style={title}>{this.props.title}</div>
            <div style={desc}>{this.props.description}</div>
            <div style={meta}>{this.props.meta}</div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = StandardEvent;
