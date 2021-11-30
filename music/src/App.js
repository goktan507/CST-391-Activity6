import React from "react";
import Card from "./Card";
import "./App.css";
// import albums from "./albums.json";
import SearchForm from "./SearchForm";
import dataSource from "./dataSource";
class App extends React.Component {
    state = { albumList: [], searchPhrase: "" };

    componentDidMount() {
        this.loadAlbums();
        // this.setState({
        //     albumList: albums
        // })
    }

    loadAlbums = async () => {
        const response = await dataSource.get('/albums');
        this.setState({albumList: response.data});
    }

    updateSearchResults = async (phrase) => {
        console.log("phrase = ", phrase);
        this.setState({ searchPhrase: phrase });
        const response = await dataSource.get('/albums/search/description/' + phrase);
        console.log(response.data);
        this.setState({albumList: response.data});
    }

    renderedList = () => {
        return this.state.albumList.map(
            (album) => {
                //if(album.description.toLowerCase().includes(this.state.searchPhrase.toLowerCase()) || this.state.searchPhrase === "")
                        return (<Card key= {album.id} albumTitle={album.title} albumDescription={album.description} buttonText="OK" imgURL={album.image} />
                );
                // else
                //     console.log(album, "does not match", this.state.searchPhrase);
                // return  <div></div>
                }
        );
    };

    render() {
        return (
            <div>
                <div className="container">
                    <SearchForm onSubmit={this.updateSearchResults} />
                </div>
                <div className="container">
                    {this.renderedList()}
                </div>
            </div>
        )
    }

}

export default App;