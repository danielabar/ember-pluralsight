import Route from '@ember/routing/route';
import $ from 'jquery'

export default Route.extend({
  model(params) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = $.getJSON(`/data/production.json?start=${params.start}&end=${params.end}`)
        resolve(data)
      }, 2000)
    })
  }
});
