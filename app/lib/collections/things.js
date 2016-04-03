Coisas = new Meteor.Collection('things');

Schemas = {};


Schemas.Coisas = new SimpleSchema({
  title: {
    type: String,
    label: 'Titulo',    
    max: 60
  },
  content: {
    type: String,
    label: 'Descrição',    
    autoform: {
      rows: 5
    }
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

Coisas.attachSchema(Schemas.Coisas)
