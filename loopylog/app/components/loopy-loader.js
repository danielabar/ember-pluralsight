import Component from '@ember/component';
import moment from 'moment';

export default Component.extend({
  actions: {
    loadData() {
      let newStart = moment(new Date(this.get('start_date'))).format('MM-DD-YYYY ') + this.get('start_time');
      console.log(newStart)
      let newEnd = moment(new Date(this.get('end_date'))).format('MM-DD-YYYY ') + this.get('end_time');
      console.log(newEnd)
      let url = `/${newStart}/to/${newEnd}`;
      console.log(url)
      // this.transitionTo(url);
      // this.sendAction("action", url);
      this.get('load')(url);
    }
  }
});
