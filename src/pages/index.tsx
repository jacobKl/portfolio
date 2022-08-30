import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero/Hero"
import AboutMe from "../components/AboutMe/AboutMe"
import 'swiper/css';
import Articles from "../components/Articles/Articles"
import Timeline from "../components/Timeline/Timeline";

const IndexPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <AboutMe />
        <Timeline />
        <Articles />
      </>
    </Layout>
  )
}

export default IndexPage
