import React from 'react'
import styled from 'styled-components'

const Container = styled.div([], {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  width: '100vw',
  height: '100vh',
  padding: '2rem',
  background: 'radial-gradient(ellipse at bottom,  rgb(9,76,114) 0%,rgb(1,41,63) 100%)',
})


const Example = ({ children }) => (
  <Container>
    {children}
  </Container>
)


export default Example
