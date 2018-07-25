
global.Buffer = global.Buffer || require("buffer").Buffer;
import './Login.html';
//import { eventLogin, LoginSchema } from '../../api/eventlogin/eventlogin.js';
import { Mongo } from 'meteor/mongo';

//const conn= Meteor.connection;
//const Login  = new Mongo.Collection('meteor.Login');


//var a =Login.find();
//if (a===null) Login.createCollection("Login", { capped : true, size : 5242880, max : 5000 } )
   
Template.App_Login.helpers({
  count: function () {
    return eventLogin.find({user_id : userVar, pass: passVar}).count();
  }
});

Template.App_Login.onCreated(() => {
  Template.instance().subscribe('eventLogin');
});

  Template.App_Login.events({

    
    'submit form': function (e) {
      e.preventDefault();
      let userVar  = $('.input-form[name="inputUser"]').val();
      let passVar =  $('.input-form[name="inputPass"]').val();
    
     // console.log(goToLogin);
        if(userVar=='') { alert("Please fill username");return;}
        else if (passVar=='') {alert("Please fill password");return;}

      
      const eventLogin = new Mongo.Collection('meteor.Login');
         eventLogin.insert({ user_id : "vwinata",pass:"vpw"});
        Meteor.startup(() => {
          //const counts = eventLogin.find({},{user_id : userVar, pass: passVar}).count();
          const counts = eventLogin.find({user_id : userVar, pass: passVar}).count();
       
          console.log(counts);
        
      //  eventLogin.find({}, { user_id: 'vwinata', pass: 'vpw' }).fetch(function(err, result) {
    // if (err) throw err;
    // console.log(result);
    //db.close();
 

   
      var userName = eventLogin.find({}, { user_id : userVar, pass: passVar }).fetch()[0].user_id;
     
    
        if(counts==1) {
          Session.set("pic", userName);
          console.log(Session.get("pic"));
          location.href="/Calendar/"+eventLogin.find({}, { user_id: userName }).fetch()[0].user_id;
        }
        else
        {
          alert("Please check your username or password");
        }
        // location.href="/home";
        
      });

  }

})




