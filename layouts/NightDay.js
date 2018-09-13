import React from 'react'
import styled from 'styled-components'

const Root = styled.div([], {
  width: '100vw',
  height: '100vh',
})

const Container = styled.div([], {
  display: 'flex',
  height: '100%',
})

const Day = styled.div([], {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'pink',
  height: '100%',
  padding: '2rem',
  background: 'radial-gradient(ellipse at bottom,  rgb(204, 239, 255) 0%,rgb(0, 175, 255) 100%)',
})

const Night = styled.div([], {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  height: '100%',
  padding: '2rem',
  background: 'radial-gradient(ellipse at bottom,  rgb(9,76,114) 0%,rgb(1,41,63) 100%)',
})


const NightDay = ({ children }) => {
  const [ day, ...rest ] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <Container>
        <Day>{day}</Day>
        <Night>{rest}</Night>
      </Container>
    </Root>
  )
}

export default NightDay
