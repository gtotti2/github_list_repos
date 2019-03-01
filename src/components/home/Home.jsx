import React from 'react'
import Main from '../template/Main'

import List from './List'

export default props =>
    <Main icon="home" title="Listagem">
        <div className="display-4">Bem vindo</div>
        <hr />
        <p className="mb-0">Listagem de repositórios públicos</p>
        <List user="reactjs"/>
    </Main>