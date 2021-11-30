import React from 'react';

class SearchForm extends React.Component {

    state = {inputtext: ""};

    handleChangeInput = (event) => {
        this.setState({inputtext: event.target.value});
        console.log(event.target.value);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputtext);
    }
    render() {
        return (
            <div>
                <form onSubmit= {this.handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="search-term">Search box</label>
                        <input 
                            onSubmit= {this.handleFormSubmit}
                            onChange= {this.handleChangeInput}
                            type="text" 
                            className="form-control" 
                            placeholder="Search term here"/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SearchForm;