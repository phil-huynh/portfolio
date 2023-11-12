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
import { motion } from "framer-motion"

export default function TechIcons() {
  const iconContainerStyle = {
    "padding": "2rem",
    "width": "90%",
    "marginTop": "2rem",
    "overflowY": "auto",
  }

  const iconGroupStyle ={
    "display": "flex",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "gap": "1rem",
    "alignContent": "flex-start",
  }

  return (
    <motion.div
      className="glass extra-shadow"
      style={iconContainerStyle}
      initial={{ x: -2000 }}
      animate={{ x: 0 }}
      transition={{ duration: 2, delay: .5 }}
    >
        <h3 style={{"textAlign": "left", "textDecoration": "underline"}}>Languages</h3>
        <section style={iconGroupStyle}>
          <JavascriptIcon/>
          <TypescriptIcon/>
          <PythonIcon/>
          <RubyIcon/>
          <BashIcon/>
        </section>
        <hr/>
        <h3 style={{"textAlign": "left", "textDecoration": "underline"}}>Front End Development</h3>
        <section style={iconGroupStyle}>
          <HTMLLogo/>
          <CSSLogo/>
          <MarkdownIcon/>
          <JQueryIcon/>
          <ReactIcon/>
          <ReduxIcon/>
          <NextJSIcon/>
          <SassIcon/>
          <BootstrapIcon/>
          <BulmaIcon/>
          <MaterialUIIcon/>
          <ViteIcon/>
          <WebpackIcon/>
          <BabelIcon/>
          <FigmaIcon/>
        </section>
        <hr/>
        <h3 style={{"textAlign": "left", "textDecoration": "underline"}}>Back End Development</h3>
        <section style={iconGroupStyle}>
          <NodeIcon/>
          <ExpressIcon/>
          <NpmIcon/>
          <DjangoIcon/>
          <FastAPIIcon/>
          <FlaskIcon/>
          <PostgresIcon/>
          <MySQLIcon/>
          <SQLiteIcon/>
          <MongoIcon/>
          <RedisIcon/>
        </section>
        <hr/>
        <h3 style={{"textAlign": "left", "textDecoration": "underline"}}>Testing</h3>
        <section style={iconGroupStyle}>
          <JasmineIcon/>
          <MochaIcon/>
          <JestIcon/>
          <PytestIcon/>
        </section>
        <hr/>
        <h3 style={{"textAlign": "left", "textDecoration": "underline"}}>Build Tools and Deployment</h3>
        <section style={iconGroupStyle}>
          <AWSLogo/>
          <LinuxIcon/>
          <DockerIcon/>
          <NGNIXIcon/>
        </section>
    </motion.div>
  )
}