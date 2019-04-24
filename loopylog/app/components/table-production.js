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
  max_boardfeet: computed.max('boardfeets')
});
