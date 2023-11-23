import AWSLogo from '../tech_icons/AmazonWebServices'
import HTMLLogo from '../tech_icons/HTML_Logo'
import CSSLogo from '../tech_icons/CSS_Logo'
import JavascriptIcon from '../tech_icons/JavascriptIcon'
import TypescriptIcon from '../tech_icons/TypescriptIcon'
import PythonIcon from '../tech_icons/PythonIcon'
import JQueryIcon from '../tech_icons/JQueryIcon'
import ReactIcon from '../tech_icons/ReactIcon'
import ReduxIcon from '../tech_icons/ReduxIcon'
import NextJSIcon from '../tech_icons/NextJSIcon'
import SassIcon from '../tech_icons/SassIcon'
import BootstrapIcon from '../tech_icons/BootstrapIcon'
import BulmaIcon from '../tech_icons/BulmaIcon'
import MaterialUIIcon from '../tech_icons/MaterialUIIcon'
import FigmaIcon from '../tech_icons/FigmaIcon'
import NodeIcon from '../tech_icons/NodeIcon'
import DjangoIcon from '../tech_icons/DjangoIcon'
import FastAPIIcon from '../tech_icons/FastAPIIcon'
import FlaskIcon from '../tech_icons/FlaskIcon'
import LinuxIcon from '../tech_icons/LinuxIcon'
import DockerIcon from '../tech_icons/DockerIcon'
import NGNIXIcon from '../tech_icons/NGNIXIcon'
import PostgresIcon from '../tech_icons/PostgresIcon'
import MySQLIcon from '../tech_icons/MySQLIcon'
import SQLiteIcon from '../tech_icons/SQLiteIcon'
import MongoIcon from '../tech_icons/MongoIcon'
import RedisIcon from '../tech_icons/RedisIcon'
import JasmineIcon from '../tech_icons/JasmineIcon'
import MochaIcon from '../tech_icons/MochaIcon'
import JestIcon from '../tech_icons/JestIcon'
import PytestIcon from '../tech_icons/PytestIcon'
import BashIcon from '../tech_icons/BashIcon'
import WebpackIcon from '../tech_icons/Webpack'
import BabelIcon from '../tech_icons/BabelIcon'
import ViteIcon from '../tech_icons/ViteIcon'
import MarkdownIcon from '../tech_icons/MarkdownIcon'
import RubyIcon from '../tech_icons/RubyIcon'
import NpmIcon from '../tech_icons/NpmIcon'
import ExpressIcon from '../tech_icons/ExpressIcon'
import FramerMotionIcon from '../tech_icons/FramerMotionIcon'
import AmplifyIcon from '../tech_icons/Amplify'
import EC2Icon from '../tech_icons/EC2Icon'
import Route53Icon from '../tech_icons/Route53Icon'
import CloudFormationIcon from '../tech_icons/CloudFormationIcon'
import LambdaIcon from '../tech_icons/LambdaIcon'
import RabbitMQIcon from '../tech_icons/RabbitMQIcon'

import { useAnimate, usePresence, stagger} from "framer-motion"

import { useStore } from '../Store'
import { useEffect } from 'react'
import styles from "./Home.module.css"

export default function TechIcons() {
  const { firstTime } = useStore()

  const [ scope, animate ] = useAnimate()
  const [ isPresent, safeToRemove ] = usePresence()

  const skillsTransition = firstTime ?
    {
      duration: 1.6,
      delay: stagger(.25, {startDelay: 2.3}),
      type: "spring",
      bounce: .5
    }
    :
    {
      duration: 1.6,
      delay: stagger(.25),
      type: "spring",
      bounce: .5
    }



  const rotateIn = async () => {
    await animate('section', {rotateX: 270}, {duration: .05})
    await animate(scope.current, {opacity: 1}, {duration: .05})
    await animate('section', {rotateX: [270, 0]}, skillsTransition)
  }

  const rotateOut = async () => {
    await animate('section', {rotateX: [0, 270]})
    safeToRemove()
  }

  useEffect(() => {
    isPresent ? rotateIn() : rotateOut()
  }, [isPresent])

  return (
    <div
      className={styles.skillsContainer}
      ref={scope}
    >
      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Languages</h3>
        <div className={styles.skillsGroupSpread}>
          <JavascriptIcon width={"2rem"}/>
          <TypescriptIcon width={"2rem"}/>
          <PythonIcon width={"3rem"}/>
          <RubyIcon width={"3rem"}/>
          <BashIcon width={"3rem"}/>
        </div>
      </section>

      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Front End Development</h3>
        <div className={styles.skillsIconGroup}>
          <HTMLLogo width={"2.5rem"}/>
          <CSSLogo width={"2.5rem"}/>
          <MarkdownIcon width={"2.3rem"}/>
          <JQueryIcon width={"3rem"}/>
          <ReactIcon width={"2.2rem"}/>
          <ReduxIcon width={"2.2rem"}/>
          <NextJSIcon width={"4rem"}/>
          <SassIcon width={"2.5rem"}/>
          <BootstrapIcon width={"2.5rem"}/>
          <BulmaIcon width={"2.5rem"}/>
          <MaterialUIIcon width={"2.5rem"}/>
          <FramerMotionIcon width={"2rem"}/>
          <ViteIcon width={"2rem"}/>
          <FigmaIcon width={"2.2rem"}/>
        </div>
      </section>

      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Back End Development</h3>
        <div className={styles.skillsGroupSpread}>
          <NodeIcon width={"5.5rem"}/>
          <ExpressIcon width={"5.5rem"}/>
          <NpmIcon width={"3rem"}/>
          <DjangoIcon width={"4rem"}/>
          <FastAPIIcon width={"5rem"}/>
          <FlaskIcon width={"4.5rem"}/>
          <RabbitMQIcon width={"6rem"}/>
        </div>
      </section>
      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Databases and Caching</h3>
        <div className={styles.skillsGroupSpread}>
          <PostgresIcon width={"3rem"}/>
          <MySQLIcon width={"5rem"}/>
          <SQLiteIcon width={"3.8rem"}/>
          <MongoIcon width={"3.4rem"}/>
          <RedisIcon width={"3rem"}/>
        </div>
      </section>
      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Build Tools and Deployment</h3>
        <div className={styles.skillsGroupSpread}>
          <LinuxIcon width={"3rem"}/>
          <DockerIcon width={"3.8rem"}/>
          <NGNIXIcon width={"5rem"}/>
          <BabelIcon width={"4.7rem"}/>
          <WebpackIcon width={"7rem"}/>

        </div>
      </section>
      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Cloud Services</h3>
        <div className={styles.skillsGroupSpread}>
          <AWSLogo width={"7rem"}/>
          <AmplifyIcon width={"2.2rem"}/>
          <EC2Icon width={"2.2rem"}/>
          <Route53Icon width={"2.4rem"}/>
          <CloudFormationIcon width={"2.3rem"}/>
          <LambdaIcon width={"2.3rem"}/>
        </div>
      </section>
      <section className={`glass ${styles.skillGroupCard}`} >
        <h3 className={styles.skillGroupHeader}>Testing</h3>
        <div className={styles.skillsGroupSpread}>
          <JasmineIcon width={"3rem"}/>
          <MochaIcon width={"3rem"}/>
          <JestIcon width={"3rem"}/>
          <PytestIcon width={"3.5rem"}/>
        </div>
      </section>
    </div>
  )
}