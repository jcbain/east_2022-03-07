// npm i bcrypt
// npm i bcryptjs

const bcrypt = require('bcryptjs');

const plainTextPassword = 'password';


// async methods with callbacks
bcrypt.genSalt(10, (err, salt) => {
  console.log('async salt: ', salt);
  bcrypt.hash(plainTextPassword, salt, (err, hash) => {
    console.log('async hash: ', hash)

  })
});

// sync methods
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(plainTextPassword, salt);
console.log('sync salt: ', salt);
console.log('sync hash: ', hash);

// async compare with callback
bcrypt.compare('passdsword', hash, (err, success) => {
  console.log('was this successful: ', success);
});

// sync compare
const success = bcrypt.compareSync('password', hash);
console.log('sync compare: ', success);


// async with promises (post lecture demo)
bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt promise: ', salt)
    return bcrypt.hash(plainTextPassword, salt)
  })
  .then((hash) => {
    console.log('hash promise', hash)
  })
  .catch(err => console.log(err))