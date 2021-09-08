import React from 'react'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    background-color: #EAF1FE;
    border-radius: 40px;
    width: 95%;
    margin: 15px;
    height: 90vh;
    padding: 53px 65px 53px 35px;
`;

const Wrapper = (props) => {
  return <StyledWrapper {...props}/>
}

export default Wrapper;
