import React from 'react'

import Container from 'components/Container'

import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <p>
        Desenvolvido com &hearts;{' '}
        <a href="https://github.com/EduSouza-programmer">Edu Souza</a>
        .
      </p>
    </Container>
  </S.Wrapper>
)

export default Footer
