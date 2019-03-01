import React, { Component } from 'react';
import Axios from 'axios'


const initialState = {
    results: [],
    searchText: ''
}

const baseUrl = 'https://api.github.com/repos/'


class searchTerm extends Component {


    state = { ...initialState }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.search(this.state.searchText, this.props.repo)
        e.currentTarget.reset();

    }

    search = (query, repo) => {
        console.log(query, repo,this)
        Axios(`${baseUrl}/${this.props.location.split('/')[this.props.location.split('/').length - 2]}/${repo}/commits`).then(resp => {
            this.setState({ results: resp.data })
        })
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search"
                    onChange={this.onSearchChange}
                    name="search"
                    ref={(input) => this.query = input}
                    placeholder="Procurar..." />
                <button className="search-button" type="submit" id="submit">Procurar</button>
            </form>
        );
    }
}

export default searchTerm;