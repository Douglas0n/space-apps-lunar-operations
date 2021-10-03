
import { Meteor } from 'meteor/meteor'

Meteor.publish('users', function publishUsers() {
    return Meteor.users.find({}, { fields: { _id: 1, 'profile.name': 1 } });
});