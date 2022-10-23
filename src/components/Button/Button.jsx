import PropTypes from "prop-types";
import { LoadMoreStyled } from "./Button.styled";

export const Button = ({onLoad}) => {
    return (
        <LoadMoreStyled
            type = "button"
            onClick={onLoad}
        >
            LOAD MORE
        </LoadMoreStyled>
    )
} 

Button.propTypes = {
    onLoad: PropTypes.func.isRequired,
};
