import Component from '@ember/component';

export default Component.extend({
  editing: false,
  actions: {
    edit() {
      this.set('editing', true);
    },
    save() {
      //save something to the server
      this.set('editing', false);
    },
    cancel() {
      this.set('editing', false);
    }
  }
});
