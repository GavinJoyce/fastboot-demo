import Em from 'ember';
import fetch from 'ember-network/fetch';

export default Em.Route.extend({
  model(params) {
    return fetch(`https://api.github.com/orgs/${params.organisation_id}`).then(function(response) {
      return response.json();
    });
  }
});
