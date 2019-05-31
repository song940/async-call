
const call = p => 
  p
  .then(r => [null, r])
  .catch(e => [ e ]);

module.exports = call;