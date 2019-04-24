import Service from '@ember/service';
import Production from '../models/production';
import $ from 'jquery';

export default Service.extend({
  production(start, end) {
    const jsonData = $.getJSON(`/data/production.json?start=${start}&end=${end}`)
    let records;
    return jsonData.then(data => {
      records = data.map(item => Production.create(item))
      this.set('data', records);
      return records;
    });
  },

  dimension(dimension_id) {
    return this.get('data').findBy('DimensionID', parseInt(dimension_id));
  }
});
