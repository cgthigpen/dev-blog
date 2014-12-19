Template.latestPost.helpers({
  'latestEntry': function(){
    return PostsList.findOne({}, {sort: {createdAt: -1} })
  }
});

Template.latestPost.events({
  'click .nav-previous': function (event) {
    // This function is called when the "Previous" button is clicked

    event.preventDefault();

    // var pageId = event.target._id// {{latestEntry}}._id;

    var pageId = Router.current().route.path(this);

    if (pageId == "/") {
      alert("You're on the main page.")
    } else {
      alert("You're on a particular post's page")
    }

    // if URL is "/"
    // call the next-to-last post
    // else if URL is "/_id"
    // call previous post to the _id post

    // alert(pageId)

    // return {{newPage}}
  }
});
