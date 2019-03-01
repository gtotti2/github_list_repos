import React from 'react'
import Main from '../template/Main'
import RepoInfo from './RepoInfo'
import Search from './Search'


const headerProps = {
    icon: 'book',
    title: 'Repositório',
}

export default props =>
    <Main {...headerProps}>
        <div className="display-4">Listagem de commits do repositório <b>{props.location.pathname.split('/')[3]}</b></div>
        <hr />
        <Search location={props.location.pathname} repo={props.location.pathname.split('/')[3]}/>
        <RepoInfo location={props.location.pathname} />
    </Main>
