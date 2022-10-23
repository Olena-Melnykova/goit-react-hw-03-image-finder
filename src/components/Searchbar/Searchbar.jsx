import {Component} from "react";
import PropTypes from "prop-types";
import {
  SearchBarStyled,
  SearchForm,
  SearchButton,
  SearchInput,
  SearchFormLabel,
} from './Searchbar.styled';

export default class Searchbar extends Component {
    state = {
        search: " ",
    }

    handleChange = e => {
        this.setState({ search: e.currentTarget.value });
    };

    handleSubmit = e => {
        e.preventDefault();

       this.props.onSubmit(this.state.search);
       this.setState({ search: " " });
    };

    render() {
        const {search} = this.state;
        return (
            <SearchBarStyled>
                <SearchForm 
                 onSubmit={this.handleSubmit}>
                    <SearchButton 
                        type="submit" 
                    >
                    <SearchFormLabel>Search</SearchFormLabel>
                    </SearchButton>
                    <SearchInput
                        value={search}
                        onChange={this.handleChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </SearchBarStyled>
        )
    }
}

Searchbar.propTypes = { 
    onSubmit: PropTypes.func.isRequired 
};