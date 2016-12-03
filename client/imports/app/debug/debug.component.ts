import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { blurbGenerateOutput } from '../../../../both/methods/blurb.methods';

import template from './debug.component.html';
import style from './debug.component.scss';

import { Story } from '../../../../both/models/story.model';
import { Blurb } from '../../../../both/models/blurb.model';

import { StoryService } from '../../services/story.service';
import { BlurbService } from '../../services/blurb.service';

@Component({
  selector: 'debug',
  template,
  styles: [ style ],
})

export class DebugComponent implements OnInit, OnDestroy {
  addStoryForm: FormGroup;
  addBlurbForm: FormGroup;
  blurbsSub: Subscription;
  currentBlurbs: Observable<Blurb[]>;
  currentStory: Story;
  stories: Observable<Story[]>;
  storiesSub: Subscription;

  constructor(private formBuilder: FormBuilder, private storyService: StoryService, private blurbService: BlurbService) {

  }

  addStory(): void {
    if (this.addStoryForm.valid) {
      this.storyService.addStory(this.addStoryForm.value);
      this.addStoryForm.reset();
    }
  }

  addBlurb(): void {
    if (this.addBlurbForm.valid) {
      // sampleCharRnn(this.addBlurbForm.value.input);
      // blurbGenerateOutput(this.addBlurbForm.value.input)
      // .then(generated => {
      //   console.log(generated);
      //   this.addBlurbForm.value.generated = generated;
      //   this.blurbService.addBlurb(Object.assign({}, this.addBlurbForm.value, {storyId: this.currentStory._id}));
      //   this.addBlurbForm.reset();
      // });
      this.blurbService.addBlurb(Object.assign({}, this.addBlurbForm.value, {storyId: this.currentStory._id}))
      .then(() => {
        this.addBlurbForm.reset();

      });
    }
  }

  selectStory(story): void {
    this.currentStory = story;
    this.currentBlurbs = this.storyService.getBlurbs(this.currentStory._id);
  }

  ngOnInit() {
    this.blurbsSub = MeteorObservable.subscribe('blurbs').subscribe();
    this.storiesSub = MeteorObservable.subscribe('stories').subscribe();

    this.stories = this.storyService.getStories();

    this.addStoryForm = this.formBuilder.group({
      title: [],
    });

    this.addBlurbForm = this.formBuilder.group({
      input: [],
      genre: [],
      generated: [],
    });
  }

  ngOnDestroy() {
    this.blurbsSub.unsubscribe();
    this.storiesSub.unsubscribe();
  }
}
