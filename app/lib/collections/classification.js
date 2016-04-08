Classification = new Meteor.Collection('classification');

Schemas = {};


Schemas.Classification = new SimpleSchema({
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
  responsible: {
    type: String,
    label: 'Responsável',    
    max: 60
  },  
  createdAt: {
    type: Date,
    label: 'Data',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoValue: function () {
      if (this.isInsert) {
        return Meteor.userId();
      }
    },
    autoform: {
      options: function () {
        _.map(Meteor.users.find().fetch(), function (user) {
          return {
            label: user.emails[0].address,
            value: user._id
          };
        });
      }
    }
  }
});

Classification.attachSchema(Schemas.Classification)
