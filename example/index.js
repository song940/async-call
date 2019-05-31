const call = require('..');

const findUserById = async () => {
  if(Math.random() > .5){
    throw Error('BOOM!');
  }
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