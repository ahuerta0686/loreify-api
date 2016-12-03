import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { HTTP } from 'meteor/http';

export function blurbGenerateOutput(input: string) {
  check(input, String);

  return new Promise((resolve, reject) => {
    console.log(JSON.stringify({input}));
    HTTP.call('POST', 'http://localhost:5000/', {data: {input}}, (err, result) => {
      if (err)
        reject(err);
      else
        resolve(result.content);
    });
  });
}
