import { Meteor } from 'meteor/meteor';
import { Blurbs } from '../../../both/collections/blurb.collection';

Meteor.publish('blurbs', () => Blurbs.find({}));
