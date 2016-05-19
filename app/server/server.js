Meteor.publish('classification', function() {
  return Classification.find();
});

Meteor.publish('categories', function() {
  return Categories.find();
});

Meteor.publish('things', function() {
  return Things.find({owner:this.userId});
});
