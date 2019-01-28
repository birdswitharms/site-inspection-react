import React from 'react'
import styled from 'styled-components'

const TableHeader = () => (
    <StyledHeader>
      <div>Job Number</div><div>Project Name</div>
    </StyledHeader>
  )

const StyledHeader = styled.div`
  width: 100%;

  div {
    width: 50%;
    font-size: 1.5rem;
    display: inline-block;
    text-align: center;
  }
`


export default TableHeader
