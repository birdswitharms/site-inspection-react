import React from 'react'
import styled from 'styled-components'

const LogoHeader = () => (
    <StyledHeader>
      <img src="bering-logo.png" alt="logo" />
    </StyledHeader>
  )

const StyledHeader = styled.div`
  background-color: lightgrey;
  border-bottom: 1px solid grey;
  text-align: center;
  flex-grow: 1;

  img {
    width: 15vh;
  }
`

export default LogoHeader
