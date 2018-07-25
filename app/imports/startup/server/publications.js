import { EventData } from '../../api/eventdata/eventdata.js';
//import { eventlogin } from '../../api/eventlogin/eventlogin.js' 
//import { eventlogin } from '/imports/api/eventlogin/eventlogin.js';
import { Meteor } from 'meteor/meteor';

Meteor.publish('EventData', function publishStudentData() {
  return EventData.find();
});

Meteor.publish('eventlogin', function eventlogin() {
  return eventlogin.find();
});
