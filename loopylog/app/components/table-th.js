import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  classNameBindings: ['th_class'],
  tagName: 'th',
  th_class: computed('sort_by', 'current_sort', function () {
    return (this.get('sort_by') === this.get('current_sort')) ? 'sorted' : '';
  }),
  actions: {
    sort() {
      this.get('sort_data')(this.get('sort_by'));
    }
  }
});
