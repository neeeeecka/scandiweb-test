/**
 *
 * @param {string | undefined} curr string that needs to be added or nothing to get the value
 * @returns {Function|string} Function if called with parameter;
 *  returns String if called without parameters
 * @description
 *    Joins strings together using "-".
 *
 * @example
 * curryDashStr('hello')('guys')('123')() => 'hello-guys-123'
 * curryDashStr('hello') => Function(next: string | undefined)
 * curryDashStr()() => ''
 */
function curryDashStr(curr) {
  if (curr) {
    return (next) => {
      if (next) {
        return curryDashStr(curr + "-" + next);
      } else {
        return curr;
      }
    };
  } else {
    return "";
  }
}

// const val = curryDashStr("hello")("test")("yee")();

export default curryDashStr;
