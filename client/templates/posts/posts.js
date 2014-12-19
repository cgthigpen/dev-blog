Template.posts.helpers({
    'entry': function(){
        return PostsList.find({}, {sort: {createdAt: 1} }) // {} means return all data from the collection
    }
});
