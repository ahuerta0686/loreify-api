import { Component } from "@angular/core";
import template from "./app.component.web.html";
import style from "./app.component.scss";

@Component({
  selector: "app",
  template,
  styles: [ style ]
})
export class AppComponent {
  constructor() {
  }
}
