import { Meteor } from 'meteor/meteor';
import { MongoObservable } from 'meteor-rxjs';

import { Story } from '../models/story.model';

export const Stories = new MongoObservable.Collection<Story>('stories');

Stories.allow({
  insert: () => true,
});
