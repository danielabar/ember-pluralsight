import EmberObject, {
  computed
} from '@ember/object'

export default EmberObject.extend({
  boards: computed('BoardsSum', function () {
    return this.get('BoardsSum');
  }),
  boardfeet: computed.alias('BoardFeetSum'),
  volume: computed('NominalLength', 'NominalWidth', 'NominalThickness', function () {
    return this.get('NominalLength') * 12 * this.get('NominalWidth') * this.get('NominalThickness');
  })
});
