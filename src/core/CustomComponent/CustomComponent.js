import React from "react";

class CustomComponent extends React.Component {
  /**
   * @type {Array<Function>}
   */
  cleanupListeners = [];

  /**
   *
   * @param {*} cleanupFunction: () => void
   */
  addCleanup = (cleanupFunction) => {
    this.cleanupListeners.push(cleanupFunction);
  };

  componentWillUnmount = () => {
    this.cleanupListeners.forEach((cleanup) => {
      cleanup();
      console.log("Cleaning up...");
    });
  };
}

export default CustomComponent;
