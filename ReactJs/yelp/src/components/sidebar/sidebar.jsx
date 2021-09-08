import React from 'react'
import styled from 'styled-components'
import Avatar from '../avatar/Avatar';
import Menu from '../menu/Menu';


const StyledSidebar = styled.div`
  background-color: ${({bgColor}) => bgColor || '#EAF1FE'};
`;

const Sidebar = (props) => {
  return <>
    <StyledSidebar {...props}/>
    <Avatar fullName = {"Aslamjon Ibragimov"}/>
    <Menu />
  </>;
}

export default Sidebar
