import { CollectionObject } from './collection-object.model';

export interface Blurb extends CollectionObject {
  storyId: string;
  input: string;
  generated: string;
}
