/* eslint-disable consistent-return */

import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';
import Media from './Media';
import handleMethodException from '../../modules/handle-method-exception';
import rateLimit from '../../modules/rate-limit';

Meteor.methods({
  'documents.findOne': function documentsFindOne(documentId) {
    check(documentId, Match.OneOf(String, undefined));

    try {
      return Media.findOne(documentId);
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'documents.insert': function documentsInsert(doc) {
    check(doc, {
      title: String,
      body: String,
    });

    try {
      return Media.insert({ owner: this.userId, ...doc });
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'documents.update': function documentsUpdate(doc) {
    check(doc, {
      _id: String,
      title: String,
      body: String,
    });

    try {
      const documentId = doc._id;
      const docToUpdate = Media.findOne(documentId, { fields: { owner: 1 } });

      if (docToUpdate.owner === this.userId) {
        Media.update(documentId, { $set: doc });
        return documentId; // Return _id so we can redirect to document after update.
      }

      throw new Meteor.Error('403', 'Sorry, pup. You\'re not allowed to edit this document.');
    } catch (exception) {
      handleMethodException(exception);
    }
  },
  'documents.remove': function documentsRemove(documentId) {
    check(documentId, String);

    try {
      const docToRemove = Media.findOne(documentId, { fields: { owner: 1 } });

      if (docToRemove.owner === this.userId) {
        return Media.remove(documentId);
      }

      throw new Meteor.Error('403', 'Sorry, pup. You\'re not allowed to delete this document.');
    } catch (exception) {
      handleMethodException(exception);
    }
  },
});

rateLimit({
  methods: [
    'documents.insert',
    'documents.update',
    'documents.remove',
  ],
  limit: 5,
  timeRange: 1000,
});
