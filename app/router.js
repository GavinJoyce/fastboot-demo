import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('github', function() {
    this.route('organisation', { path: ':organisation_id' }, function() {
      // this.route('repository', { path: ':repository_id' }, function() {
      //   this.route('commits');
      // });
    });
  });
});

export default Router;
