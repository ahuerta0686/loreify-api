import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Stories } from '../../../both/collections/story.collection';
import { Story } from '../../../both/models/story.model';
import { Blurbs } from '../../../both/collections/blurb.collection';
import { Blurb } from '../../../both/models/blurb.model';

@Injectable()
export class StoryService {
  getStories(): Observable<Story[]> {
     return Stories.find({}).zone();
  }

  addStory(story: Story): void {
    Stories.insert(story);
  }

  getBlurbs(storyId: string): Observable<Blurb[]> {
    return Blurbs.find({storyId}).zone();
  }
}
