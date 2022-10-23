import { Component } from "react";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import { AppStyled } from "./App.styled";

export class App extends Component {
  state = {
    search: " ",
  }

  filterChanging = (searchValue) => {
    this.setState({search: searchValue})
  }

  render() {
    return (
      <AppStyled>
        <Searchbar 
          onSubmit={this.filterChanging}
        />
        <ImageGallery
          queryName={this.state.search}
        />
        
      </AppStyled>
    );
  }
};
