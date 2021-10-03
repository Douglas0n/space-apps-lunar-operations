
import { RepositoryCollection } from '/imports/db/RepositoryCollection';
import { v4 as uuid } from 'uuid';

Meteor.methods({

    pushLog(values) {

        const { type, description, text, file } = values;
        const user = Meteor.user();

        const log = {
            createdAt: new Date(),
            createdBy: this.userId,
            type: type,
            text: text,
            description: description,
            file: file,
            versions: [],
            autor: {
                name: user.profile.name
            }
        }

        RepositoryCollection.insert(log);
    },

    pushLogVersion(values) {

        const { id, type, description, text, file } = values;
        const user = Meteor.user();

        const log = {
            createdAt: new Date(),
            createdBy: this.userId,
            versionId: uuid(),
            type: type,
            text: text,
            description: description,
            file: file,
            autor: {
                name: user.profile.name
            }
        }

        RepositoryCollection.update(
            { _id: id },
            { $addToSet: { versions: log } },
            // undefined,
            // pushLog(log)
        );
    }


});