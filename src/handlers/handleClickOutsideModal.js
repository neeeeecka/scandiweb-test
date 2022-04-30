/**
 *
 * @param {React.RefObject<HTMLElement>} ref
 * @callback callback
 * @returns {Function} Cleanup
 */
const handleClickOutsideModal = (ref, callback) => {
  const transitionFinished = { current: false };

  const handleClick = (e) => {
    /**
     * Race condition(document event comes after element event), but should work.
     */
    if (transitionFinished.current) {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }
  };

  const isEscapeKey = (e) => {
    if (e.key === "Escape") {
      callback();
    }
  };

  // console.log("Init");
  document.addEventListener("click", handleClick);
  document.addEventListener("keydown", isEscapeKey);

  const cleanup = () => {
    document.removeEventListener("click", handleClick);
    document.removeEventListener("keydown", isEscapeKey);
  };

  /**
   *
   * @callback callback
   */
  const safeToggle = (callback) => {
    transitionFinished.current = false;

    callback();

    setTimeout(() => {
      transitionFinished.current = true;
    }, 150);
  };

  return [cleanup, safeToggle];
};

export default handleClickOutsideModal;
