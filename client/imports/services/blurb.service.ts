import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Blurbs } from '../../../both/collections/blurb.collection';
import { Blurb } from '../../../both/models/blurb.model';

@Injectable()
export class BlurbService {
  constructor(private http: Http) {

  }

  addBlurb(blurb): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/', { input: blurb.input, genre: blurb.genre })
      .subscribe(response => {
        blurb.generated = response._body;
        Blurbs.insert(blurb);
        resolve();
      }, err => {
        reject(err);
      });
    });
  }
}
