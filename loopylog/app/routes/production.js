import Route from '@ember/routing/route';
import $ from 'jquery'
import production from '../models/production';

export default Route.extend({
  model(params) {
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
  }
});
