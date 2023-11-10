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

export default function TechIcons() {
  const iconContainerStyle = {
    // "backgroundColor": "white",
    "padding": "2rem",
    "borderRadius": "25px",
    "width": "50%",
    // "border": "red 1px solid",
    "display": "flex",
    "alignItems": "center"
  }

  const iconSectionStyle = {
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "5rem",
    "marginTop": "1rem"
  }


  return (
    <div className="svg-shadow" style={iconContainerStyle}>
      <div>
      <section className="svg-shadow" style={iconSectionStyle}>
        <HTMLLogo/>
        <CSSLogo/>
        <JavascriptIcon/>
        <TypescriptIcon/>
        <PythonIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <JQueryIcon/>
        <ReactIcon/>
        <ReduxIcon/>
        <NextJSIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <SassIcon/>
        <BootstrapIcon/>
        <BulmaIcon/>
        <MaterialUIIcon/>
        <FigmaIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <NodeIcon/>
        <DjangoIcon/>
        <FastAPIIcon/>
        <FlaskIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <PostgresIcon/>
        <MySQLIcon/>
        <SQLiteIcon/>
        <MongoIcon/>
        <RedisIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <JasmineIcon/>
        <MochaIcon/>
        <JestIcon/>
        <PytestIcon/>
        <BashIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <AWSLogo/>
        <LinuxIcon/>
        <DockerIcon/>
        <NGNIXIcon/>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <WebpackIcon/>
        <BabelIcon/>
        <ViteIcon/>
        <MarkdownIcon/>
      </section>
      </div>
    </div>
  )
}