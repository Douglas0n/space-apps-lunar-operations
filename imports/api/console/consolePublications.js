
import { Meteor } from 'meteor/meteor'
import { ConsoleCollection } from '/imports/db/ConsoleCollection';

Meteor.publish('console', function publishConsole() {
    return ConsoleCollection.find({ user: this.userId });
});