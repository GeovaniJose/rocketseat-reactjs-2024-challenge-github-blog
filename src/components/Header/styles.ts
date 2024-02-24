import styled from 'styled-components'

import headerBackgroundImg from '../../assets/header-background.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 4rem 0 8.375rem;
  background-image: url(${headerBackgroundImg});
  background-color: ${(props) => props.theme['base-profile']};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`
