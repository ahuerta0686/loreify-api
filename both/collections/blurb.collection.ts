import { MongoObservable } from 'meteor-rxjs';
import { Blurb } from '../models/blurb.model';

export const Blurbs = new MongoObservable.Collection<Blurb>('blurbs');

Blurbs.allow({
  insert: () => true,
});
