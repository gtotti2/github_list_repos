import React, { Component } from 'react'
import Axios from 'axios'
import Main from '../template/Main'

const baseUrl = 'https://api.github.com/repos/'

const initialState = {
    commits: [],
}

export default class RepoInfo extends Component {

    state = { ...initialState }

    componentWillMount() {
        Axios(`${baseUrl}${this.props.location.split('/')[this.props.location.split('/').length - 2]}/${this.props.location.split('/')[this.props.location.split('/').length - 1]}/commits`).then(resp => {
            this.setState({ commits: resp.data })
        })
    }
    renderConsole(info){
        console.log(info)
    }
    
    renderRepos() {
        return (
            <div className="list" >
                <div className="row">
                    {this.renderConsole(this.state)}
                    <div className="col-12">{this.renderTable()}</div>
                </div>
                <hr />
            </div>
        )
    }

    renderTable() {
        return (
            <table>
                <thead>
                    <tr>
                        <td>Autor: </td>
                        <td>E-mail: </td>
                        <td>Mensagem: </td>
                        <td>Data: </td>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
    renderRows() {
        let twentyCommits = this.state.commits.filter((commit, index) => {
            return index < 20
        })
        return this.renderTwentyCommits(twentyCommits)
    }
    renderTwentyCommits(commits) {
        return (commits.map((info, index) => {
            return (
                <tr key={index}>
                    <td>{info.commit.author.name}</td>
                    <td>{info.commit.author.email}</td>
                    <td>{info.commit.message}</td>
                    <td>{info.commit.author.date}</td>
                </tr>
            )
        }))
    }

    render() {
        return (
            <Main>{this.renderRepos()}</Main>
        )
    }
}