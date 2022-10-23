import { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "components/Modal/Modal";
import { ImageGalleryItemImg, ImageGalleryItemStyled } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {
    state = {
        isModalOpened: false,
    };
    
    toggleModal = () => {
        this.setState(({ isModalOpened }) => ({ isModalOpened: !isModalOpened }));
    };


    render() {
        const { webformatURL, largeImageURL, tags } = this.props.image;
        return (
            <ImageGalleryItemStyled>
                <ImageGalleryItemImg 
                    src={webformatURL} 
                    alt={tags}
                    onClick={this.toggleModal}
                />
                {this.state.isModalOpened && (
                    <Modal onClose={this.toggleModal}>
                        <img
                            src={largeImageURL}
                            alt={tags}
                        />
                    </Modal>
                )}
            </ImageGalleryItemStyled>
        )
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.object.isRequired,
};
