import { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'

const StyledCard = styled(Card)`
	padding: 5px;
	margin: 5px;
`

const ContactForm = (props) => {
	return (
		<StyledCard variant='outlined'>
			<TextField
				label='First Name'
				size='small'
				margin='normal'
				value={props.firstName}
				onChange={(ev) => {props.handleChange(props.index, {firstName: ev.target.value})}}
			/>
			<TextField
				label='Last Name'
				size='small'
				margin='normal'
				value={props.lastName}
				onChange={(ev) => {props.handleChange(props.index, {lastName: ev.target.value})}}
			/>
			<TextField
				label='Email'
				size='small'
				margin='normal'
				value={props.emailAddress}
				onChange={(ev) => {props.handleChange(props.index, {emailAddress: ev.target.value})}}
			/>
			<TextField
				label='Phone'
				size='small'
				margin='normal'
				value={props.phoneNumber}
				onChange={(ev) => {props.handleChange(props.index, {phoneNumber: ev.target.value})}}
			/>
		</StyledCard>
	)

}

export default ContactForm;
