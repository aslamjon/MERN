import styled, { css } from 'styled-components'


const StyledButton = styled.button`
  background-color: ${(props) => props.theme.color};
  border-radius: ${({ borderRadius }) => borderRadius || '15px'};
  padding: 11px 14px;
  border: none;
  color: #000;
  ${({ danger }) => danger && css`
    background-color: #DF4545;
  `};
  ${({ circle }) => circle && css`
    border-radius: 50%;
  `};
  ${({ dark }) => dark && css`
    background-color: #000;
    color: #fff;
  `};
  ${({ outlined }) => outlined && css`
    border: 2px solid ${outlined};
    color: ${outlined};
  `};
`;

const Button = ({...props}) => {
    return <StyledButton {...props} />
}

export default Button
