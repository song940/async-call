## await-call [![await-call](https://img.shields.io/npm/v/await-call.svg)](https://npmjs.org/await-call)

> Async await wrapper for easy error handling without try-catch

### Installation

```bash
$ npm install await-call
```

### Example

```js
const call = require('await-call');

const findUserById = async id => {
  if(Math.random() > .5)
    throw Error('BOOM!');
  return { name: 'lsong' };
};

const cb = err => {
  console.error('Oh! No..', err);
};

(async () => {
    
  const [ err, user ] = await call(findUserById(1));
  if(err) return cb('user not found');
  console.log(`hello ${user.name}`);

})();
```

### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---