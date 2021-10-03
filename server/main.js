import { Meteor } from 'meteor/meteor';

import '/imports/db/ConsoleCollection';
import '/imports/api/console/consoleMethods';
import '/imports/api/console/consolePublications';

import '/imports/db/RepositoryCollection';
import '/imports/api/repository/repositoryMethods';
import '/imports/api/repository/repositoryPublications';

import '/imports/api/users/usersPublications';

Meteor.startup(() => {});
