import React from "react"
import { Container, Text } from "./styles"

const Welcome = ({ name }) => (
  <Container>
    <Text>Welcome to the SCA 2 Web Starter{ name !== "" && `, ${name}`}!</Text>
  </Container>
)

export default Welcome
