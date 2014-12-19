Template.newEntry.events({
  'submit form': function (event) {
    // This function is called when the new entry form is submitted

    event.preventDefault();

    var postTitle = event.target.title.value;
    var postBody = event.target.body.value;
    var postOrder = PostsList.find().fetch().length + 1;

    PostsList.insert({
      title: postTitle,
      body: postBody,
      createdAt: new Date(),
      postOrder: postOrder
    });

    // Clear form
    event.target.title.value = "";
    event.target.body.value = "";

    // Prevent default form submit
    return false;
  }
});
