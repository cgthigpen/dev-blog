Template.onePost.helpers({
  'entryOne': function(){
    return PostsList.findOne({}, {sort: {createdAt: 1} })
  }
});
