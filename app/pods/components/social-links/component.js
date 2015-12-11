import Ember from 'ember';

export default Ember.Component.extend({
  textClass: 'text-sm',
  listClass: '',
  iconClass: '',
  faClass: '',

  h5Text: false,

  facebookURL: 'https://www.facebook.com/pointhomefinal',
  twitterURL: 'https://twitter.com/Blackening999',
  linkedInURL: 'https://ua.linkedin.com/in/katansky',
  githubURL: 'https://github.com/Blackening999',

  activeIconClass: Ember.computed.notEmpty('iconClass')
});
