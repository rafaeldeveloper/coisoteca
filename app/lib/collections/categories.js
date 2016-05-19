Categories = new Meteor.Collection('categories');

Schemas = {};


Schemas.Categories = new SimpleSchema({
  descricao: {
    type: String,
    label: 'Descrição',    
    max: 60,
    unique:true
  }
});

Categories.attachSchema(Schemas.Categories)
