import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.modelFor('production').findBy('DimensionID', parseInt(params.dimension_id))
  }
});
