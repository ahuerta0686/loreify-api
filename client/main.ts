import "angular2-meteor-polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { Meteor } from "meteor/meteor";
import { AppModule } from "./imports/app";


import ionicSelector from 'ionic-selector';

enableProdMode();

function setClass(css) {
  if (!document.body.className) {
    document.body.className = "";
  }
  document.body.className += " " + css;
}

Meteor.startup(() => {
  if (Meteor.isCordova) {
    ionicSelector("app");
    setClass('mobile');
  }
  else {
    setClass('web');
  }
   platformBrowserDynamic().bootstrapModule(AppModule);
});
