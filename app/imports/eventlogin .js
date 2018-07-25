import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

const eventlogin = new Mongo.Collection('Login');

/**
 * Create the schema for login
 */

eventlogin.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

eventlogin.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

eventlogin.schema = new SimpleSchema({
  user_id: {
    label: 'username',
    type: String,
    optional: false,
  },
  pass: {
    label: 'password',
    type: String,
    optional: false,
  },
});
eventlogin.attachSchema(eventlogin.schema);
//export const eventlogin;
export { eventlogin };