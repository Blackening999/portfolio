import Ember from 'ember';
import config from 'portfolio/config/environment';

export default Ember.Component.extend({
  fromEmail: '',
  fromName: '',
  emailSubject: 'Message from portfolio!',
  emailBody: '',

  actions: {
    sendEmail() {
      const $messengerForm = this.$('#messenger'),
            $messengerBox  = this.$('#messenger-box'),
            $errorForm = this.$('.form-error ul li');

      Ember.$.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': config.mandrillAPIKey,
          'message': {
            'from_email': this.get('fromEmail'),
            'from_name': this.get('fromName'),
            'to': [
              {
                'email': config.emailTo,
                'name': config.authorName,
                'type': 'to'
              }
            ],
            'autotext': 'true',
            'subject': this.get('emailSubject'),
            'html': this.get('emailBody')
          }
    }}).done(() => {
      $messengerBox.find('.messenger-box-content').fadeOut();
      $errorForm.remove();
      $messengerForm.fadeOut(300).removeClass('active');
      this.setProperties({
        fromEmail: '',
        fromName: '',
        emailSubject: 'Message from portfolio!',
        emailBody: ''
      });
    });
  }
  }
});
