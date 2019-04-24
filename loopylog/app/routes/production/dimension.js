import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('mystore').dimension(params.dimension_id);
  }
});
