
AdminConfig = {
  userSchema: null,
  name: 'Coisoteca',
  adminEmails: ['rafael@gocase.com'],
  collections:
  {
   Coisas: {
      tableColumns: [
       { label: 'Descrição', name: 'descricao' },
       { label: 'Local', name: 'local' },
       { label: 'Data', name: 'createdAt', 'type' : 'date' }
      ],    
      templates: {
        new: {
          name: 'AddCoisa'
        }
      }

   }
  }
} 


Router.route('/', function () {
  if (Meteor.userId()) {
    Router.go('/admin');
  }else{
     this.render('home');
  }
});

