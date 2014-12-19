Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  // waitOn: function() {return Meteor.subscribe('posts')}
});

Router.route('/', {name: 'latestPost'});

// Router.route('/:_id', {
//   name: 'nav',
//   data: function() { return PostsList.findOne(this.params._id); }
// });
