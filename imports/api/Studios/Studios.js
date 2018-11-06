/* eslint-disable consistent-return */

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Studios = new Mongo.Collection('Studios');

Studios.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Studios.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

const Use = new SimpleSchema({
  label: {
    type: String,
    label: 'Description of this use',
  },
  icon: {
    type: String,
    label: 'The font awesome class for this uses icon',
  },
});

const Equipment = new SimpleSchema({
  label: {
    type: String,
    label: 'Description of this use',
  },
  type: {
    type: String,
    label: 'The type of equipment',
  },
  brand: {
    type: String,
    label: 'The brand of this equipment',
  },
  model: {
    type: String,
    label: 'The model of this equipment',
  },
});

const Image = new SimpleSchema({
  label: {
    type: String,
    label: 'Description of this use',
  },
  url: {
    type: String,
    label: 'The url for this image',
  },
});

Studios.schema = new SimpleSchema({
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
  name: {
    type: String,
    label: 'The name of this studio',
  },
  price: {
    type: Number,
    label: 'The hourly rate for this studio',
  },
  location: {
    type: String,
    label: 'The id of this studios location',
  },
  uses: {
    type: Array,
    label: 'Types of services this studio provides',
  },
  'uses.$': {
    type: Use,
  },
  equipment: {
    type: Array,
    optional: true,
    label: 'Types of services this studio provides',
  },
  'equipment.$': {
    type: Equipment,
  },
  images: {
    type: Array,
    optional: true,
    label: 'Types of services this studio provides',
  },
  'images.$': {
    type: Image,
  },
});

Studios.attachSchema(Studios.schema);

export default Studios;
