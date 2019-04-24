import Route from '@ember/routing/route';
import moment from 'moment'

export default Route.extend({
  beforeModel() {
    this.transitionTo('production',
      `${moment(new Date()).format('MM-DD-YYYY')} 05:00`,
      `${moment(new Date()).format('MM-DD-YYYY')} 15:00`
    )
  }
});
