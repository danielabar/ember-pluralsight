import Route from '@ember/routing/route';
import $ from 'jquery'
import production from '../models/production';
import moment from 'moment';

export default Route.extend({
  model(params) {
    this.set('params', params);
    return new Promise((resolve) => {
      setTimeout(() => {
        const jsonData = $.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`)
        let records;
        jsonData.then(data => {
          records = data.map(item => production.create(item))
          resolve(records)
        });
      }, 400)
    })
  },
  setupController(controller, model) {
    this._super(controller, model);
    let params = this.get('params');
    controller.set('start', params.start);
    controller.set('end', params.end);
    controller.set('start_date', moment(new Date(params.start)).format('MM/DD/YYYY'));
    controller.set('end_date', moment(new Date(params.end)).format('MM/DD/YYYY'));
    controller.set('start_time', moment(new Date(params.start)).format('HH:mm'));
    controller.set('end_time', moment(new Date(params.end)).format('HH:mm'));
  },
  actions: {
    loadData: function (url) {
      this.transitionTo(url)
    }
  }
});
