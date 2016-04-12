import Em from 'ember';

export default Em.Route.extend({
  model() {
    return [
      {
        id: 'emberjs',
        name: 'Ember.js'
      },
      {
        id: 'atom',
        name: 'Atom'
      }
    ];
  }
});
