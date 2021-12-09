
const call = p => 
  p.then(r => [null, r], e => [e, null]);

module.exports = call;
