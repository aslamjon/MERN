import React from 'react'
import styled from 'styled-components'
import { changeSidebar } from '../../redux/sidebar/sidebar.action';
import Button from '../button/Button'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { viewSidebarCondition } from '../../redux/sidebar/sidebar.selector';
import { ReactComponent as HomeSvg } from '../../assets/images/home.svg';

const LiStyle = styled.li`
  
`; 
const UlStyle = styled.ul`
  list-style: none;
`; 

const NameStyle = styled.div`

`;


const Menu = ({sidebarCondition, changeSidebar}) => {
  console.log(sidebarCondition);
  changeSidebar(false);
  return (
    <>
      <UlStyle>
        <LiStyle>
          <Button danger h={44} w={46}>
            <HomeSvg fill='rgba(0,0,0,0.0)' stroke='red'/>
            <NameStyle>Home</NameStyle>
          </Button>
        </LiStyle>
      </UlStyle>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  sidebarCondition: viewSidebarCondition
})

const mapDispathToProps = dispatch => ({
  changeSidebar: value => dispatch(changeSidebar(value))
})

export default connect(mapStateToProps, mapDispathToProps)(Menu);

