/**
 *
 * @param {React.RefObject<HTMLElement>} ref
 * @callback callback
 * @returns {Function, Function} Cleanup, safeToggle
 */
const handleClickOutsideModal = (ref, callback) => {
  const transitionFinished = { current: false };

  const handleClick = (e) => {
    /**
     * Race condition(document event comes after element event), but should work.
     * DOM node is getting destroyed before the event, so e.target.parents are null and not modal
     */
    if (transitionFinished.current) {
      const modal = ref.current;

      if (modal) {
        // const divRect = modal.getBoundingClientRect();

        // var inside = false;

        if (!modal.contains(e.target)) {
          callback();
        }
      }
    }
  };

  const isEscapeKey = (e) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  // console.log("Init");
  document.addEventListener('click', handleClick);
  document.addEventListener('keydown', isEscapeKey);

  const cleanup = () => {
    document.removeEventListener('click', handleClick);
    document.removeEventListener('keydown', isEscapeKey);
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
