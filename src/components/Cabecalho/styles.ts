import styled from 'styled-components'

export const CabecalhoStyle = styled.header`
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  text-align: center;
  padding: 24px 0;
`
