import React from 'react'
import styled from 'styled-components'


const StyledSidebar = styled.div`
  background-color: ${({bgColor}) => bgColor || 'red'};
`;

const Sidebar = (props) => {
  return <StyledSidebar {...props}/>
}

export default Sidebar
