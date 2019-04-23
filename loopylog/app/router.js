import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('production', {
    path: '/:start/to/:end'
  }, function () {
    this.route('dimension', {
      path: '/dimension/:dimension_id'
    });
  });
});

export default Router;
