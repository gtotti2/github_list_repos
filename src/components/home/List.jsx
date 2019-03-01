import React, { Component } from 'react'
import Axios from 'axios'
import Main from '../template/Main'
import Link from '../repo/Link'

const headerProps = {
    icon: 'book',
    title: 'Repositórios',
}
const baseUrl = 'https://api.github.com/users/'

const initialState = {
    user: "",
    list: []
}


export default class List extends Component {

    state = { ...initialState }

    componentWillMount() {
        Axios(`${baseUrl}${this.props.user}/repos`).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    renderTable() {
        return (
            <table>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderNotPrivateRows(repos) {
        return (repos.map(repo => {
            return (
                <tr key={repo.id}>
                    <td><Link owner={repo.owner.login} name={repo.name}/></td>
                </tr>
            )
        }))
    }
    renderRows() {
        let notPrivateRepos = this.state.list.filter((repo) => {
            return !repo.private
        })
        return this.renderNotPrivateRows(notPrivateRepos)
    }

    renderList() {
        return (
            <div className="list" >
                <div className="row">
                    <div className="col-12">{this.renderTable()}</div>
                </div>
                <hr />
            </div>
        )
    }

    render() {
        return (
            <Main {...headerProps}>{this.renderList()}</Main>
        )
    }
}