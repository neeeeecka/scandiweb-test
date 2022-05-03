function curryDashStr(curr) {
  return (next) => {
    if (next) {
      return curryDashStr(curr + "-" + next);
    } else {
      return curr;
    }
  };
}

// const val = curryDashStr("hello")("test")("yee")();

export default curryDashStr;
