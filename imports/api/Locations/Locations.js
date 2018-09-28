/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Locations = new Mongo.Collection('Locations');

Locations.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Locations.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Locations.schema = new SimpleSchema({
  address: {
    type: String,
    label: 'Address for this location',
  },
  name: {
    type: String,
    label: 'The name of this location.',
  },
  owner: {
    type: String,
    label: 'The ID of the user this document belongs to.',
  },
  createdAt: {
    type: String,
    label: 'The date this document was created.',
    autoValue() {
      if (this.isInsert) return (new Date()).toISOString();
    },
  },
  updatedAt: {
    type: String,
    label: 'The date this document was last updated.',
    autoValue() {
      if (this.isInsert || this.isUpdate) return (new Date()).toISOString();
    },
  },
});

Locations.attachSchema(Locations.schema);

export default Locations;
