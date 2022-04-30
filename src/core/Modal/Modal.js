import React from "react";
import * as ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    // this.el.style.position = "absolute";
    // this.el.style.top = "0";
    // this.el.style.left = "0";
    // this.el.style.width = "100%";
    // this.el.style.height = "100%";
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
