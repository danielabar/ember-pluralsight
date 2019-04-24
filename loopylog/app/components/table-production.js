import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  tagName: 'table',
  classNames: ['table'],
  boards: computed.mapBy('model', 'boards'),
  total_boards: computed.sum('boards'),
  boardfeets: computed.mapBy('model', 'boardfeet'),
  total_boardfeet: computed.sum('boardfeets'),
  max_boardfeet: computed.max('boardfeets'),
  sort_by: 'default',
  sorted_model: computed('model', 'sort_by', function () {
    switch (this.get('sort_by')) {
      case "boards":
        return this.get('model').sortBy('boards', 'DimensionName').reverse();
      case "boardfeet":
        return this.get('model').sortBy('boardfeet', 'DimensionName').reverse();
      default:
        return this.get('model');
    }
  }),
  actions: {
    sort_data(column) {
      this.set('sort_by', column);
    }
  }
});
