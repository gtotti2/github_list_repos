import React, { Component } from 'react';
import Axios from 'axios'


const initialState = {
    results: [],
    searchText: ''
}



class searchTerm extends Component {
    

    state = { ...initialState }

    onSearchChange = e => {
        this.setState({
            searchText: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.search(this.state.searchText, this.props.repo, this.props.user)
        e.currentTarget.reset();
    }

    search = (query, repo, user) => {
        Axios({
            method: 'get',
            url: `https://api.github.com/search/commits?q=repo:${user}/${repo}+${query}`,
            headers: { "Accept": "application/vnd.github.cloak-preview" },
        }).then(resp => {
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