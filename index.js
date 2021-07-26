const express = require('express')

const app = express()

// const hi = "Hello" // "prettier/prettier": "error"

// app.get('/', function(req, res) { // "func-names": "off"
//   res.send("hello");
// });

app.get('/', (req, res) => {
  res.send('hello')
  process.exit(1) // 'no-proccess-exit -> off
})

app.listen(3000, () => {
  console.log('App listeninf on port 3000!') // "no-console": "off"
})

/* comment */

const obj = {
  hello: function () { // "object-shorthand": "off"
    console.log('hello')
  },
}
