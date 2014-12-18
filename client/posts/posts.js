Template.posts.helpers({
    'entry': function(){
        return PostsList.find({}, {sort: {createdAt: 1} }) // {} means return all data from the collection
    }
});

Template.newEntry.events({    
    'submit form': function (event) {
        // This function is called when the new entry form is submitted
        
        event.preventDefault();
        
        var postTitle = event.target.title.value;
        var postBody = event.target.body.value;
                
        PostsList.insert({
            title: postTitle,
            body: postBody,
            createdAt: new Date() // current time
        });
        
        // Clear form
        event.target.title.value = "";
        event.target.body.value = "";
        
        // Prevent default form submit
        return false;
    }
});