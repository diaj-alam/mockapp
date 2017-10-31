import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled, {ThemeProvider} from 'styled-components'
//import {} from './actionCreators/actionCreators'


const mapState2props = ({routerReducer})=>{
	return {

	}
}

const mapDispatch2props = (dispatch)=>{
    return {

    }
}

const StepperContainer = connect(
    mapState2props,
    mapDispatch2props
)()

export default StepperContainer