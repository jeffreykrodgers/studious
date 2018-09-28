import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Media from '../Media';

Meteor.publish('documents', function documents() {
  return Media.find({ owner: this.userId });
});

// Note: documents.view is also used when editing an existing document.
Meteor.publish('documents.view', (documentId) => {
  check(documentId, String);
  return Media.find({ _id: documentId });
});

Meteor.publish('documents.edit', function documentsEdit(documentId) {
  check(documentId, String);
  return Media.find({ _id: documentId, owner: this.userId });
});
