import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Title = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`

// const Description = styled.p`
//   padding: 0;
//   margin-bottom: 1rem;
//   font-size: 1.2rem;
//   @media (max-width: 425px) {
//     font-size: 1rem;
//   }
// `

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
`

const Avatar =  styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            name
            title
            description
            avatarURL
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <Avatar src={data.site.siteMetadata.avatarURL} />
          <NameHeader>{data.site.siteMetadata.name}</NameHeader>
          <Title>{data.site.siteMetadata.title}</Title>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
