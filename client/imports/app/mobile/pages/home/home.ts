import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { StoryPage } from '../story/story';

import { AddStoryPage } from '../addStory/addStory';

import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }

  navigateToStory() {
    this.navCtrl.push(StoryPage);
  }

  navigateToAddStory() {
    let modal = this.modalCtrl.create(AddStoryPage);
    modal.present();

  }

}
