import AWSLogo from './tech_icons/AmazonWebServices'
import HTMLLogo from './tech_icons/HTML_Logo'
import CSSLogo from './tech_icons/CSS_Logo'
import JavascriptIcon from './tech_icons/JavascriptIcon'
import TypescriptIcon from './tech_icons/TypescriptIcon'
import PythonIcon from './tech_icons/PythonIcon'
import JQueryIcon from './tech_icons/JQueryIcon'
import ReactIcon from './tech_icons/ReactIcon'
import ReduxIcon from './tech_icons/ReduxIcon'
import NextJSIcon from './tech_icons/NextJSIcon'
import SassIcon from './tech_icons/SassIcon'
import BootstrapIcon from './tech_icons/BootstrapIcon'
import BulmaIcon from './tech_icons/BulmaIcon'
import MaterialUIIcon from './tech_icons/MaterialUIIcon'
import FigmaIcon from './tech_icons/FigmaIcon'
import NodeIcon from './tech_icons/NodeIcon'
import DjangoIcon from './tech_icons/DjangoIcon'
import FastAPIIcon from './tech_icons/FastAPIIcon'
import FlaskIcon from './tech_icons/FlaskIcon'
import LinuxIcon from './tech_icons/LinuxIcon'
import DockerIcon from './tech_icons/DockerIcon'
import NGNIXIcon from './tech_icons/NGNIXIcon'
import PostgresIcon from './tech_icons/PostgresIcon'
import MySQLIcon from './tech_icons/MySQLIcon'
import SQLiteIcon from './tech_icons/SQLiteIcon'
import MongoIcon from './tech_icons/MongoIcon'
import RedisIcon from './tech_icons/RedisIcon'
import JasmineIcon from './tech_icons/JasmineIcon'
import MochaIcon from './tech_icons/MochaIcon'
import JestIcon from './tech_icons/JestIcon'
import PytestIcon from './tech_icons/PytestIcon'
import BashIcon from './tech_icons/BashIcon'
import WebpackIcon from './tech_icons/Webpack'
import BabelIcon from './tech_icons/BabelIcon'
import ViteIcon from './tech_icons/ViteIcon'
import MarkdownIcon from './tech_icons/MarkdownIcon'
import RubyIcon from './tech_icons/RubyIcon'
import NpmIcon from './tech_icons/NpmIcon'
import ExpressIcon from './tech_icons/ExpressIcon'
import FramerMotionIcon from './tech_icons/FramerMotionIcon'
import AmplifyIcon from './tech_icons/Amplify'
import EC2Icon from './tech_icons/EC2Icon'
import Route53Icon from './tech_icons/Route53Icon'
import CloudFormationIcon from './tech_icons/CloudFormationIcon'
import LambdaIcon from './tech_icons/LambdaIcon'
import RabbitMQIcon from './tech_icons/RabbitMQIcon'

import { useAnimate, usePresence} from "framer-motion"

import { useStore } from './Store'
import { useEffect } from 'react'

export default function TechIcons() {
  const {locate, locate2, locate3, firstTime} = useStore()

  const [ scope, animate ] = useAnimate()
  const [ isPresent, safeToRemove ] = usePresence()

  const iconContainerStyle = {

    width: "100%",
    height: "100%",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"

    // "marginInline": "1rem",
  }

  const iconGroupStyle ={
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "1rem",
    alignItems: "center"

  }

  const skillsStyle = {
    paddingInline: "1.2rem",
    width: "88%",
    marginInline: "1rem",
    marginBottom: "1rem",
    paddingTop: ".2rem",
    paddingBottom: ".8rem",
  }

  const headingStyle = {
    textAlign: "left",
    textDecoration: "underline",
    // margingTop: "0",
    marginBottom: '.3rem'
  }

  const spreadStyle = {
    ...iconGroupStyle,
    justifyContent: "space-between"
  }

  const transition = firstTime ? { duration: 1.5, delay: .8 } : { duration: 1}
  const skillsTransition = firstTime ? { duration: 1.7, delay: 2.3, type: "spring", bounce: .5 } : { duration: 1.7, type: "spring", bounce: .5}



  const rotateIn = async () => {
    await animate('section', {rotateX: [270, 0]}, skillsTransition)
  }

  const rotateOut = async () => {
    await animate('section', {rotateX: [0, 270]})
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (
    <div
      style={{...iconContainerStyle}}
      ref={scope}
    >
      <section
        className="glass"
        style={{...skillsStyle}}
      >
        <h3 style={{...headingStyle}}>Languages</h3>
        <div style={{...iconGroupStyle, ...spreadStyle}}>
          <JavascriptIcon width={"2rem"}/>
          <TypescriptIcon width={"2rem"}/>
          <PythonIcon width={"3rem"}/>
          <RubyIcon width={"3rem"}/>
          <BashIcon width={"3rem"}/>
        </div>
      </section>

      <section
        className="glass"
        style={skillsStyle}
      >
        <h3 style={{...headingStyle}}>Front End Development</h3>
        <div style={{...iconGroupStyle}}>
          <HTMLLogo width={"3rem"}/>
          <CSSLogo width={"3rem"}/>
          <MarkdownIcon width={"2.3rem"}/>
          <JQueryIcon width={"3rem"}/>
          <ReactIcon width={"2.5rem"}/>
          <ReduxIcon width={"2.5rem"}/>
          <NextJSIcon width={"5rem"}/>
          <SassIcon width={"3rem"}/>
          <BootstrapIcon width={"3rem"}/>
          <BulmaIcon width={"3rem"}/>
          <MaterialUIIcon width={"3rem"}/>
          <FramerMotionIcon width={"2.2rem"}/>
          <ViteIcon width={"2rem"}/>
          <FigmaIcon width={"2.5rem"}/>
        </div>
      </section>

      <section
        className="glass"
        style={skillsStyle}
      >
        <h3 style={{...headingStyle}}>Back End Development</h3>
        <div style={{...spreadStyle}}>
          <NodeIcon width={"6rem"}/>
          <ExpressIcon width={"5rem"}/>
          <NpmIcon width={"3rem"}/>
          <DjangoIcon width={"4rem"}/>
          <FastAPIIcon width={"6rem"}/>
          <FlaskIcon width={"5.2rem"}/>
          <RabbitMQIcon width={"6rem"}/>
        </div>
      </section>
      <section
        className="glass"
        style={skillsStyle}
      >
        <h3 style={{...headingStyle}}>Databases and Caching</h3>
        <div style={{...spreadStyle}}>
          <PostgresIcon width={"3rem"}/>
          <MySQLIcon width={"5rem"}/>
          <SQLiteIcon width={"3.8rem"}/>
          <MongoIcon width={"3.4rem"}/>
          <RedisIcon width={"3rem"}/>
        </div>
      </section>
      <section
        className="glass"
        style={{...skillsStyle}}
      >
        <h3 style={{...headingStyle}}>Build Tools and Deployment</h3>
        <div style={{...spreadStyle}}>
          <LinuxIcon width={"3rem"}/>
          <DockerIcon width={"3.8rem"}/>
          <NGNIXIcon width={"5rem"}/>
          <BabelIcon width={"4.7rem"}/>
          <WebpackIcon width={"7rem"}/>

        </div>
      </section>
      <section
        className="glass"
        style={skillsStyle}
      >
        <h3 style={{...headingStyle}}>Cloud Services</h3>
        <div style={{...spreadStyle}}>
          <AWSLogo width={"7rem"}/>
          <AmplifyIcon width={"2.2rem"}/>
          <EC2Icon width={"2.2rem"}/>
          <Route53Icon width={"2.3rem"}/>
          <CloudFormationIcon width={"2.3rem"}/>
          <LambdaIcon width={"2.3rem"}/>
        </div>
      </section>
      <section
        className="glass"
        style={skillsStyle}
      >
        <h3 style={{...headingStyle}}>Testing</h3>
        <div style={{...spreadStyle}}>
          <JasmineIcon width={"3rem"}/>
          <MochaIcon width={"3rem"}/>
          <JestIcon width={"3rem"}/>
          <PytestIcon width={"3.5rem"}/>
        </div>
      </section>
    </div>
  )
}