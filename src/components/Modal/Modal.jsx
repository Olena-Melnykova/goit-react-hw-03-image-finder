import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { ModalStyled, ModalOverlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
    componentDidMount = () => {
        window.addEventListener("keydown", this.handleKeyDown);
    };

    componentWillUnmount = () => {
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === "Escape") {
        this.props.onClose();
        }
    };

    handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
        this.props.onClose();
        }
    };

    render() {
        return createPortal(
        <ModalOverlay 
            onClick={this.handleOverlayClick}
        >
            <ModalStyled>{this.props.children}</ModalStyled>
        </ModalOverlay>,
        modalRoot
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
};