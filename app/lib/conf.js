
AdminConfig = {
  name: 'Coisoteca',
  adminEmails: ['rafael@gocase.com'],
  collections:
  {
   Things: {}
  }
} 


Router.route('/', function () {
  this.render('home');
});

