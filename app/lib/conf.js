
AdminConfig = {
  userSchema: null,
  name: 'Coisoteca',
  adminEmails: ['rafael@gocase.com'],
  collections:
  {
   Coisas: {
      tableColumns: [
       { label: 'Descrição', name: 'descricao' },
       { label: 'Local', name: 'local' }
      ],    
      templates: {
        new: {
          name: 'AddCoisa'
        }
      }

   },
   Classification: {
      label:'Classificação',
      icon:'star',
      tableColumns: [
       { label: 'Descrição', name: 'descricao' },
      ]//,    
      // templates: {
      //   new: {
      //     name: 'AddCoisa'
      //   }
      // }

   }   
  }
} 

// AdminDashboard.addSidebarItem('Pesquisa Inteligente', AdminDashboard.path('/Coisas/smartSearch'), { icon: 'search' })

Router.route('/', function () {
  if (Meteor.userId()) {
    Router.go('/admin');
  }else{
     this.render('home');
  }
});

AdminDashboard.addCollectionItem(function (collection, path) {
  if (collection === 'Coisas') {
    return {
      title: 'Pesquisa Inteligente',
      url: path + '/smartSearch'
    };
  }
});

Router.route('/admin/Coisas/smartSearch', function () {
     this.render('AddCoisa');
});

