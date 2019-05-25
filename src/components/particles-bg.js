import React from "react"
import Particles from "react-particles-js"
import particlesParams from "../assets/particles.json"

const styles = {
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: -99,
}

class ParticlesBG extends React.PureComponent {
  render() {
    return <Particles params={particlesParams} style={styles} />
  }
}
export default ParticlesBG
