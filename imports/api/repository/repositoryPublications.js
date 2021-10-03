
import { Meteor } from 'meteor/meteor'
import { RepositoryCollection } from '/imports/db/RepositoryCollection';

Meteor.publish('repository', function publishRepository() {
    return RepositoryCollection.find();
});