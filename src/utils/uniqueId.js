/**
 *
 * @returns {string} Returns 11 character long random hex string.
 * @example
 * makeUniqueId() => 'c542567df96'
 */
function makeUniqueId() {
  const random = Math.random().toString(16).slice(2);
  const cut = random.slice(0, 11);
  return cut;
}

export default makeUniqueId;
