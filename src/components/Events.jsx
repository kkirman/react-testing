var React = require('react');
var StandardEvent = require('./StandardEvent.jsx');
var HeroEvent = require('./HeroEvent.jsx');

var Events = React.createClass({
  getInitialState: function() {
    return {
      events: []
    };
  },
  componentDidMount: function() {
    this.serverRequest = $.get("http://localhost:3030/js/newtoday.json", function (result) {
      var Section = result.response.section;
      var OneColSections = Section.one_column_frame_v1.sections;
      var MasonryItems = OneColSections[1].event_masonry_v1.items;
      this.setState({
        events: MasonryItems
      });
    }.bind(this));
  },
  render:function(){
    var eventItems = this.state.events.map(function(item){
        if(item.event_v1){
          var FormattedImageUrl = item.event_v1.event.image_url.replace("{width}x{height}","300x300");
          var event = item.event_v1.event;
          return <StandardEvent src={FormattedImageUrl} title={event.name} description={event.event_highlights} meta={event.meta_description} key={event.id}/>;
        }
        else if(item.hero_v1){
          var event = item.hero_v1.event;
          var FormattedImageUrl = event.image_url.replace("{width}x{height}","300x300");
          return <HeroEvent src={FormattedImageUrl} title={event.name} description={event.event_highlights} meta={event.meta_description} key={event.id}/>;
        }
    });

    var eventWrapper = {
        margin: 0,
        padding: 0
    }

    var noGutter = {
      margin: 0,
      padding: 0
    }

    return (
      <div className="row noGutter" style={eventWrapper}>
        {eventItems}
      </div>
    );

  }
});

module.exports = Events;
