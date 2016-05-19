Classification = new Meteor.Collection('classification');

Schemas = {};


Schemas.Classification = new SimpleSchema({
  descricao: {
    type: String,
    label: 'Descrição',    
    max: 60,
    unique:true
  }
});

Classification.attachSchema(Schemas.Classification)
