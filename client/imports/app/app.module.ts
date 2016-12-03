import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from "./app.component.web";
import { MOBILE_DECLARATIONS } from "./mobile/index";
import { AppMobileComponent } from './mobile/app.component.mobile';
import { IonicModule, IonicApp } from "ionic-angular";

import { DebugComponent } from './debug/debug.component';

import { StoryService } from '../services/story.service';
import { BlurbService } from '../services/blurb.service';

let moduleDefinition;

if (Meteor.isCordova) {
  moduleDefinition = {
    imports: [
      IonicModule.forRoot(AppMobileComponent)
    ],
    declarations: [
      ...MOBILE_DECLARATIONS
    ],
    providers: [
    ],
    bootstrap: [
      IonicApp
    ],
    entryComponents: [
      AppMobileComponent
    ]
  };
} else {
  moduleDefinition = {
    // Components, Pipes, Directive
    declarations: [
      AppComponent,
      DebugComponent,
    ],
    // Entry Components
    entryComponents: [
      AppComponent
    ],
    // Providers
    providers: [
      StoryService,
      BlurbService
    ],
    // Modules
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      JsonpModule,
    ],
    // Main Component
    bootstrap: [ AppComponent ]
  };
}

@NgModule(moduleDefinition)
export class AppModule {
  constructor() {

  }
}
