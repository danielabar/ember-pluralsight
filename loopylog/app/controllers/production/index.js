import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';

export default Controller.extend({
  // total_boards: computed('model.@each.boards', function () {
  //   return this.get('model').reduce(function (prev, row) {
  //     return prev + parseFloat(row.get('boards'));
  //   }, 0);
  // }),
  boards: computed.mapBy('model', 'boards'),
  total_boards: computed.sum('boards'),
  boardfeets: computed.mapBy('model', 'boardfeet'),
  total_boardfeet: computed.sum('boardfeets'),
  max_boardfeet: computed.max('boardfeets')
});
