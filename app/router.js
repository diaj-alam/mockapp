import React from 'react'
//import { AppContainer } from 'react-hot-loader'
//import {} from './components/menu/menu'
//import { Provider } from 'react-redux'
import styled, {injectGlobal} from 'styled-components'
//import { createStore, combineReducers } from 'redux'
//import reducers from './components/menu/reducers/reducers'

injectGlobal`
  body {
    margin: 0;
  }
`
const Container = styled.section`
    font-family: 'Roboto', sans-serif;
    position: absolute;
    display: flex;
	width: 100%;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
`

const Left = styled.div`
    display: flex;
	flex: 0.3;
	height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #0747a6;
	color: #fff;
`

//const store = createStore( combineReducers( reducers ), {})

const App = ()=>{
    return (
        <Container>
            <Left>
                <h1>MockApp</h1>
            </Left>
        </Container>
    )
}

export default App