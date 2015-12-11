import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['projectName'],
  projectName: '',

  projectData: Ember.computed('projectName', {
    get() {
      const projectName = this.get('projectName');
      let projectData = {};

      switch(projectName) {
        case 'fantasyinsiders':
          projectData['description'] = '<h1>I present the application production for ' +
            '<a href="http://fantasyinsiders.com" target="_blank"><strong>FantasyInsiders</strong></a> made in September 2015</h1>' +
            '<p class="lead">FantasyInsiders is DFS (Daily Fantasy Sports) application founded in 2012.</p>';

          projectData['items'] = [
            { link: 'img/projects/fantasyinsiders-main.png', description: 'Main Page View' },
            { link: 'img/projects/fantasyinsiders-tools.png', description: 'Cheat Sheets Tool' },
            { link: 'img/projects/fantasyinsiders-articles.png', description: 'Articles Page View' },
            { link: 'img/projects/fantasyinsiders-article.png', description: 'Article Page View' },
            { link: 'img/projects/fantasyinsiders-optimals.png', description: 'Legendary Optimizer Tool View' }
          ];

          projectData['technologies'] = ['fa fa-html5', 'fa fa-css3', 'icon-ruby-on-rails-alt', 'icon-javascript', 'icon-mysql', 'icon-mobile-device'];
          projectData['technologiesIconWidth'] = 12/projectData['technologies'].length;
          break;

        case 'slidingmenu':
          projectData['description'] = '<h1>This is the Open Source project created for ' +
          '<a href="http://blackening999.github.io/ember-cli-sliding-menu/" target="_blank"><strong>Ember</strong></a></h1>' +
          '<p class="lead">This plugin allows to integrate sliding menu for mobile apps having inertia physics with support for gestures</p>';

          projectData['items'] = [
            { link: 'img/projects/sliding-menu.png', description: 'Menu example' }
          ];

          projectData['technologies'] = ['fa fa-html5', 'fa fa-css3', 'icon-javascript'];
          projectData['technologiesIconWidth'] = 12/projectData['technologies'].length;
          break;

        case 'wecudos':
          projectData['description'] = '<h1>Scheduling tool for professionals built for <a href="http://wecudos.com" target="_blank"><strong>Wecudos</strong></a></h1>' +
          '<p class="lead">This application was built using React and Sails technologies. It is a companion application for Wecudos Mobile targeting only Professional role</p>';

          projectData['items'] = [
            { link: 'img/projects/wecudos-web.png', description: 'Main Landing' }
          ];

          projectData['technologies'] = ['fa fa-html5', 'fa fa-css3', 'icon-postgres', 'icon-javascript', 'icon-nodejs', 'icon-redis'];
          projectData['technologiesIconWidth'] = 12/projectData['technologies'].length;
          break;

        case 'asposeemail':
          projectData['description'] = '<h1>Email Web Client for <a href="http://aspose.com" target="_blank"><strong>Aspose</strong></a></h1>' +
          '<p class="lead">This application served as inner email client. Written in native JS it has a top performance</p>';

          projectData['items'] = [
            { link: 'img/projects/banckle-email.png', description: 'Main Features' },
            { link: 'img/projects/be-engine.png', description: 'Engine Features' }
          ];

          projectData['technologies'] = ['fa fa-html5', 'fa fa-css3', 'icon-java', 'icon-javascript', 'icon-apache', 'icon-mobile-device'];
          projectData['technologiesIconWidth'] = 12/projectData['technologies'].length;
          break;

        case 'bancklecampaign':
          projectData['description'] = '<h1>Mail Campaign Tool built for <a href="http://banckle.com" target="_blank"><strong>Banckle</strong></a></h1>' +
          '<p class="lead">This application allows user to send email campaign over 10M clients per week. Supported with rich features and quality service.</p>';

          projectData['items'] = [
            { link: 'img/projects/banckle-campaign.png', description: 'Main Features' },
            { link: 'img/projects/bc-import.png', description: 'Connectivity Tools' },
            { link: 'img/projects/bc-report.png', description: 'Detailed Reports' },
            { link: 'img/projects/bc-template.png', description: 'Email Template Engine' }
          ];

          projectData['technologies'] = ['fa fa-html5', 'fa fa-css3', 'icon-java-bold', 'icon-javascript', 'icon-apache', 'icon-mysql'];
          projectData['technologiesIconWidth'] = 12/projectData['technologies'].length;
          break;

        case 'wecudosmobile':
          projectData['description'] = '<h1>Hybrid application built for <a href="http://wecudos.com" target="_blank"><strong>Wecudos</strong></a></h1>' +
          '<p class="lead">This is application built with Ember, Apache Cordova and Sails. It also has real-time features available through Socket.Io</p>';

          projectData['items'] = [
            { link: 'img/projects/wecudos-mobile-video.png', description: 'Video Consultations Feature' },
            { link: 'img/projects/wecudos-mobile-after-consult.png', description: 'Review Feature' },
            { link: 'img/projects/wecudos-mobile-rating.png', description: 'Rating Feature' },
            { link: 'img/projects/wecudos-mobile-availability.png', description: 'Availabilities Feature' },
            { link: 'img/projects/wecudos-mobile-schedule.png', description: 'Schedule Feature' },
            { link: 'img/projects/wecudos-mobile-location.png', description: 'Location Map Feature' },
            { link: 'img/projects/wecudos-mobile-profile.png', description: 'Profile Page View' },
            { link: 'img/projects/wecudos-mobile-av-report.png', description: 'Profile Page Availabilities View' },
            { link: 'img/projects/wecudos-mobile-settings.png', description: 'Settings Feature' },
            { link: 'img/projects/wecudos-mobile-gallery.png', description: 'Gallery Feature' },
            { link: 'img/projects/wecudos-mobile-chat.png', description: 'Chat Feature' },
            { link: 'img/projects/wecudos-mobile-recent-messages.png', description: 'Recent Messages View' },
            { link: 'img/projects/wecudos-mobile-profiles-list.png', description: 'Profiles List View' },
            { link: 'img/projects/wecudos-mobile-new-booking.png', description: 'New Booking View' },
            { link: 'img/projects/wecudos-mobile-booking.png', description: 'Booking Form View' },
            { link: 'img/projects/wecudos-mobile-cc-view.png', description: 'Online Payment Feature' },
            { link: 'img/projects/wecudos-mobile-profiles-search.png', description: 'Search Feature' },
            { link: 'img/projects/wecudos-mobile-booking-details.png', description: 'Booking Details View' }
          ];

          projectData['technologies'] = ['fa fa-html5', 'fa fa-css3', 'icon-javascript', 'icon-postgres-alt',
            'icon-redis', 'icon-nodejs', 'icon-iphone', 'icon-apache', 'fa fa-facebook', 'fa fa-linkedin', 'fa fa-apple', 'fa fa-android'];
          projectData['technologiesIconWidth'] = 12/projectData['technologies'].length;
          break;
      }

      return projectData;

    }
  })
});
