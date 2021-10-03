
import { ConsoleCollection } from '/imports/db/ConsoleCollection';
import { v4 as uuid } from 'uuid';

Meteor.methods({

    async openConsole() {
        const console = await ConsoleCollection.find({ user: this.userId });

        if (!console) ConsoleCollection.insert(
            {
                user: this.userId,
                logs: [],
                track: [],
                closed: false
            }
        );
    },

    trackDown(values) {
        ConsoleCollection.update(
            { user: this.userId },
            { $addToSet: { $each: { track: values } } }
        );
    },

    async mergeAndClose(values) {
        // const { type, description, text, file } = values;

        // const log = {
        //     id: uuid(),
        //     createdAt: new Date(),
        //     type: type,
        //     text: text,
        //     description: description,
        //     file: file,
        //     autor: {
        //         id: this.userId,
        //         name: user.profile.name
        //     }
        // }

        // ConsoleCollection.update(
        //     { user: this.userId },
        //     { $addToSet: { logs: log } }
        // );
    }

});