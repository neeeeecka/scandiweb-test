import React from 'react'
import styled from 'styled-components'
import BigItem from '../../core/ProductTweaker/Layouts/Big/BigItem'
import FullPage from '../../core/ProductTweaker/Layouts/Fullpage'
import { ButtonFill } from '../../styles/global.css'

const CartPageSection = styled.section`
  display: flex;
  flex-direction: column;
`

class PDP extends React.Component {
  render() {
    return (
      <CartPageSection>
        <FullPage />
      </CartPageSection>
    )
  }
}

export default PDP
