import { Meteor } from 'meteor/meteor';
import { Stories } from '../../../both/collections/story.collection';

Meteor.publish('stories', () => Stories.find({}));
