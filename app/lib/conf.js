
AdminConfig = {
  name: 'Coisoteca',
  adminEmails: ['rafael@gocase.com'],
  collections:
  {
   Coisas: {}
  }
} 


Router.route('/', function () {
  if (Meteor.userId()) {
    Router.go('/admin');
  }else{
     this.render('home');
  }
});
