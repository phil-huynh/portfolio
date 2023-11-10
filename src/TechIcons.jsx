import pythonLogo from './assets/tech_icons/python.svg'
import javascriptLogo from './assets/tech_icons/javascript.svg'
import reactLogo from './assets/tech_icons/react.svg'
import djangoLogo from './assets/tech_icons/django.svg'
import nodeLogo from './assets/tech_icons/node.svg'
import fastAPILogo from './assets/tech_icons/fastapi.svg'
import postgresLogo from './assets/tech_icons/postgres.svg'
import mongoLogo from './assets/tech_icons/mongo.svg'
import mySQLLogo from './assets/tech_icons/mysql.svg'
import sqliteLogo from './assets/tech_icons/sqlite.svg'
import typescriptLogo from './assets/tech_icons/typescript.svg'
import webpackLogo from './assets/tech_icons/webpack.svg'
import babelLogo from './assets/tech_icons/babel.svg'
import awsLogo from './assets/tech_icons/aws.svg'
import bashLogo from './assets/tech_icons/bash.svg'
import cssLogo from './assets/tech_icons/css.svg'
import dockerLogo from './assets/tech_icons/docker.svg'
import reduxLogo from './assets/tech_icons/redux.svg'
import redisLogo from './assets/tech_icons/redis.svg'
import mochaLogo from './assets/tech_icons/mocha.svg'
import jestLogo from './assets/tech_icons/jest.svg'
import pytestLogo from './assets/tech_icons/pytest.svg'
import jqueryLogo from './assets/tech_icons/jquery.svg'
import linuxLogo from './assets/tech_icons/linux.svg'
import markdownLogo from './assets/tech_icons/markdown.svg'
import nginxLogo from './assets/tech_icons/nginx.svg'
import npmLogo from './assets/tech_icons/npm.svg'
import bootstrapLogo from './assets/tech_icons/bootstrap.svg'
import bulmaLogo from './assets/tech_icons/bulma.svg'
import expressLogo from './assets/tech_icons/express.svg'
import figmaLogo from './assets/tech_icons/figma.svg'
import herokuLogo from './assets/tech_icons/heroku.svg'
import htmlLogo from './assets/tech_icons/html.svg'
import jasmineLogo from './assets/tech_icons/jasmine.svg'
import materialUILogo from './assets/tech_icons/materialui.svg'
import nextLogo from './assets/tech_icons/next.svg'
import sassLogo from './assets/tech_icons/sass.svg'
import numpyLogo from './assets/tech_icons/numpy.svg'
import flaskLogo from './assets/tech_icons/flask.svg'
import jiraLogo from './assets/tech_icons/jira.svg'
import viteLogo from '/vite.svg'
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

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
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
        {/* <div title="Material UI" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={materialUILogo}></img>
        </div> */}
        {/* <div title="Figma" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={figmaLogo}></img>
        </div> */}
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>

        <div
          title="node js"
          className="svg-shadow" style={{
            "display": "flex",
            "alignItems": "center",
            "height": "2.8rem",
            "overflowY": "hidden",
            // "backgroundColor": "white",
            // "borderRadius": "10px"
          }}
        >
          <div className="svg-shadow" style={{...iconStyle, "width": '8rem'}}>
            <img src={nodeLogo} className="svg-shadow" style={{"width": "8rem"}}></img>
          </div>
        </div>
        <div
          title="django"
          className="svg-shadow"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}
        >
          <div className="svg-shadow" style={{...iconStyle, "width": '6rem'}}>
            <img src={djangoLogo} className="svg-shadow" style={{"width": "6rem"}}></img>
          </div>
        </div>

        <div
          title="FastAPI"
          className="svg-shadow" style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}>
          <div className="svg-shadow" style={{...iconStyle, "width": '8rem'}}>
            <img src={fastAPILogo} className="svg-shadow" style={{"width": "8rem"}}></img>
          </div>
        </div>
        <div
          title="Flask"
          className="svg-shadow" style={{
            "display": "flex",
            "alignItems": "center",
            "height": "3.3rem",
            "overflowY": "hidden",
            // "backgroundColor": "white",
            "borderRadius": "10px"
          }}>
          <div className="svg-shadow" style={{...iconStyle, "width": '7.2rem'}}>
            <img src={flaskLogo} className="svg-shadow" style={{"width": "7rem"}}></img>
          </div>
        </div>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <div title="Postgres" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={postgresLogo}></img>
        </div>
        <div title="MySQL" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={mySQLLogo}></img>
        </div>
        <div title="SQLite" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={sqliteLogo}></img>
        </div>
        <div title="MongoDB" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={mongoLogo}></img>
        </div>
        <div title="Redis" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={redisLogo}></img>
        </div>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        <div title="Jasmine" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={jasmineLogo}></img>
        </div>
        <div title="Mocha" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={mochaLogo}></img>
        </div>
        <div title="Jest" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={jestLogo}></img>
        </div>
        <div title="pytest" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={pytestLogo}></img>
        </div>
        <div
          className="svg-shadow" >
          <div title="BASH" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
            <img src={bashLogo}></img>
          </div>
        </div>
      </section>
      <section className="svg-shadow" style={iconSectionStyle}>
        {/* <div
          title="Amazon Web Services"
          className="svg-shadow"
        >
          <div className="svg-shadow" style={{...iconStyle, "width": '10rem'}}>
            <img src={awsLogo} className="svg-shadow" style={{"width": '10rem'}}></img>
          </div>
        </div> */}
        <AWSLogo/>
        <div title="Linux" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={linuxLogo}></img>
        </div>
        <div title="Docker" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={dockerLogo}></img>
        </div>
        <div
          title="ngnix"
          className="svg-shadow" style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4.8rem",
            "overflowY": "hidden",
          }}
        >
          <div className="svg-shadow" style={{...iconStyle, "width": '7rem', 'paddingTop': '3.3rem'}}>
            <img src={nginxLogo} className="svg-shadow" style={{"width": '7rem'}}></img>
          </div>
        </div>

        {/* <div className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
          <img src={herokuLogo}></img>
        </div> */}
      </section>

      <section className="svg-shadow" style={iconSectionStyle}>
        <div
          title="Webpack"
          className="svg-shadow" style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}
        >
          <div className="svg-shadow" style={{...iconStyle, "width": '10rem'}}>
            <img src={webpackLogo} className="svg-shadow" style={{"width": "10rem"}}></img>
          </div>
        </div>
        <div
          title="Babel"
          className="svg-shadow" style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}
        >
          <div className="svg-shadow" style={{...iconStyle, "width": '7rem'}}>
            <img src={babelLogo} className="svg-shadow" style={{"width": "7rem"}}></img>
          </div>
        </div>
        <div
          title="Vite"
          className="svg-shadow" style={{...iconStyle, "width": '3.5rem'}}
        >
          <img src={viteLogo} className="svg-shadow" style={{"width": "3.5rem"}}></img>
        </div>
        <div
          title="Markdown"
          className="svg-shadow"
        >
          <div title="Markdown" className="svg-shadow" style={{...iconStyle, "width": '4.3rem'}}>
            <img src={markdownLogo} className="svg-shadow" style={{"width": "4rem"}}></img>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}