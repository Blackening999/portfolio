import Ember from 'ember';

export default Ember.Component.extend({
  offsetTop: '',
  projectData: {},

  didInsertElement() {
    this.set('offsetTop', $(document).scrollTop());
    Ember.$('body').addClass('ajax-modal-opened');
    Ember.$('#ajax-modal').fadeIn(200, function(){
      Ember.$('html').addClass('locked-scrolling');
    });
  },
  willDestroyElement() {
    Ember.$('html').removeClass('locked-scrolling');
    Ember.$('body').removeClass('ajax-modal-opened');
    Ember.$(document).scrollTop(this.get('offsetTop'));
    Ember.$('#ajax-modal').fadeOut(200);
  }
});
