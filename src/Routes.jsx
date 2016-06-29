var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/createHashHistory');

var History = new CreateHistory({
   queryKey: false
});

 var Base = require('./components/Base.jsx');
 var Events = require('./components/Events.jsx');
 var Products = require('./components/Products.jsx');

 var Routes = (
   <Router history={History}>
     <Route path="/" component={Base}>
       <Route path="/events" component={Events}/>
       <Route path="/products" component={Products}/>
     </Route>
   </Router>
 );

module.exports = Routes;
