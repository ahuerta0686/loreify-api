const app = require('express')(),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      StringDecoder = require('string_decoder').StringDecoder,
      spawn = require('child_process').spawn,
      decoder = new StringDecoder('utf-8');

const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors());

app.post('/', cors(), (req, res) => {
  console.log(req.body);
  const child = spawn('th', [
    'sample.lua', `cv/${req.body.genre}.t7`,
    '-length', '200', '-primetext', `${req.body.input}`, '-gpuid', '-1'
  ], {
    cwd: './char-rnn',
  });

  child.on('error', err => {
    spawn('pwd')
    .stdout.on('data', data => {
      console.log(decoder.write(data));
    });
    console.log(err);
  });

  child.stdout.on('data', data => {
    // console.log(data);
    const output = decoder.write(data);
    if (req.body.input === output.substr(0, req.body.input.length)) {
      res.send(output);
    }
    // console.log(output.substr(0, req.body.input.length));
  });

  child.stderr.on('error', data => {
    console.log(decoder.write(data));
  });

  child.on('close', code => {
    if (code != 0) {
      res.send(JSON.stringify('Something happened'));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
