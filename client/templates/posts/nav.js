Template.nav.events({
  'click .nav-previous': function (event) {
    // This function is called when the "Previous" button is clicked

    event.preventDefault();

    var pageId = Meteor._id;

    alert(pageId)

    // return {{newPage}}
  }
});

// Template.nav.helpers({
//   'newPage': function(){
//     return PostsList.findOne({}, {sort: {createdAt: 1} })
//   }
// });
