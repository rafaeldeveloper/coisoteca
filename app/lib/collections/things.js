Coisas = new Meteor.Collection('things');

Schemas = {};

Schemas.Coisas = new SimpleSchema({
  descricao: {
    type: String,
    label: 'Descrição',    
    max: 60
  },
  local: {
    type: String,
    label: 'Local',    
    max: 60
  },
 thingCategorie:{
     type: String,
    autoform: {
        type: "select", 
        options: function () {
        return Categories.find().map(function (c) {
        return {label: c.descricao, value: c._id};
        });
        }
      },
    label: "Categoria da Coisa",
    optional:true 
  },
 responsible: {
    type: String,
    optional: true,
    label: 'Responsável',    
    max: 60
  },
 thingClassification:{
     type: String,
    autoform: {
        type: "select", 
        options: function () {
        return Classification.find().map(function (c) {
        return {label: c.descricao, value: c._id};
        });
        }
      },
    label: "Classificação da Coisa",
    optional:true 
  },
  
  createdAt: {
    type: Date,
    label: 'Data',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  }

});

Coisas.attachSchema(Schemas.Coisas)

