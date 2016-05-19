
AdminConfig = {
  userSchema: null,
  name: 'Coisoteca',
  adminEmails: ['rafael@gocase.com'],
  collections:
  {
   Things: {
      label:'Coisas',
      tableColumns: [
       { label: 'Descrição', name: 'descricao' },
       { label: 'Local', name: 'local' },
       { label: 'Classificação', name: 'thingClassification' },
       { label: 'Categoria', name: 'thingCategorie' },
       { label: 'Responsável', name: 'responsible' },
       { label: 'Data', name: 'createdAt' },
      ],    
      templates: {
        new: {
          name: 'AddThing'
        },
       view: {
          name: 'viewThing'
        },        
      }

   },
 //  Coisas: {
   //    label:'Coisa',
   //    icon:'star',
   //    tableColumns: [
   //     { label: 'Descrição', name: 'descricao' },
   //    ]//,    
   //    // templates: {
   //    //   new: {
   //    //     name: 'AddCoisa'
   //    //   }
   //    // }

   // },
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

   },
   Categories: {
      label:'Categoria',
      icon:'tags',
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
