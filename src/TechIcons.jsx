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
    <div style={iconContainerStyle}>
      <div>
      <section style={iconSectionStyle}>
        <div title="HTML" style={{...iconStyle, "width": '5rem'}}>
          <img src={htmlLogo}></img>
        </div>
        <div title="CSS" style={{...iconStyle, "width": '5rem'}}>
          <img src={cssLogo}></img>
        </div>
        <div title="Javascript" style={{...iconStyle, "width": '5rem'}}>
          <img src={javascriptLogo} style={{"width": "4rem"}}></img>
        </div>
        <div title="Typescript" style={{...iconStyle, "width": '5rem'}}>
          <img src={typescriptLogo} style={{"width": "4rem"}}></img>
        </div>
        <div title="Python" style={{...iconStyle, "width": '5rem'}}>
          <img src={pythonLogo}></img>
        </div>
        {/* <div style={{...iconStyle, "width": '5rem'}}>
          <img src={markdownLogo}></img>
        </div> */}
      </section>
      <section style={iconSectionStyle}>
        <div title="jquery" style={{...iconStyle, "width": '5rem'}}>
          <img src={jqueryLogo}></img>
        </div>
        <div title="React" style={{...iconStyle, "width": '7rem'}}>
          <img src={reactLogo} style={{"width": "4.5rem"}}></img>
        </div>
        <div title="Redux" style={{...iconStyle, "width": '6rem'}}>
          <img src={reduxLogo} style={{"width": "4.5rem"}}></img>
        </div>
        <div
          title="Next js"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
            // "backgroundColor": "white",
            "borderRadius": "10px"
          }}>
          <div title="Next JS" style={{...iconStyle, "width": '10rem'}}>
            <img src={nextLogo} style={{"width": '9rem'}}></img>
          </div>
        </div>
      </section>
      <section style={iconSectionStyle}>
        <div title="Sass" style={{...iconStyle, "width": '5rem'}}>
          <img src={sassLogo}></img>
        </div>
        <div title="Bootstrap" style={{...iconStyle, "width": '5rem'}}>
          <img src={bootstrapLogo}></img>
        </div>
        <div title="Bulma" style={{...iconStyle, "width": '5rem'}}>
          <img src={bulmaLogo}></img>
        </div>
        <div title="Material UI" style={{...iconStyle, "width": '5rem'}}>
          <img src={materialUILogo}></img>
        </div>
        <div title="Figma" style={{...iconStyle, "width": '5rem'}}>
          <img src={figmaLogo}></img>
        </div>
      </section>
      <section style={iconSectionStyle}>

        <div
          title="node js"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "2.8rem",
            "overflowY": "hidden",
            // "backgroundColor": "white",
            // "borderRadius": "10px"
          }}
        >
          <div style={{...iconStyle, "width": '8rem'}}>
            <img src={nodeLogo} style={{"width": "8rem"}}></img>
          </div>
        </div>
        <div
          title="django"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}
        >
          <div style={{...iconStyle, "width": '6rem'}}>
            <img src={djangoLogo} style={{"width": "6rem"}}></img>
          </div>
        </div>

        <div
          title="FastAPI"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}>
          <div style={{...iconStyle, "width": '8rem'}}>
            <img src={fastAPILogo} style={{"width": "8rem"}}></img>
          </div>
        </div>
        <div
          title="Flask"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "3.3rem",
            "overflowY": "hidden",
            // "backgroundColor": "white",
            "borderRadius": "10px"
          }}>
          <div style={{...iconStyle, "width": '7.2rem'}}>
            <img src={flaskLogo} style={{"width": "7rem"}}></img>
          </div>
        </div>
      </section>
      <section style={iconSectionStyle}>
        <div title="Postgres" style={{...iconStyle, "width": '5rem'}}>
          <img src={postgresLogo}></img>
        </div>
        <div title="MySQL" style={{...iconStyle, "width": '5rem'}}>
          <img src={mySQLLogo}></img>
        </div>
        <div title="SQLite" style={{...iconStyle, "width": '5rem'}}>
          <img src={sqliteLogo}></img>
        </div>
        <div title="MongoDB" style={{...iconStyle, "width": '5rem'}}>
          <img src={mongoLogo}></img>
        </div>
        <div title="Redis" style={{...iconStyle, "width": '5rem'}}>
          <img src={redisLogo}></img>
        </div>
      </section>
      <section style={iconSectionStyle}>
        <div title="Jasmine" style={{...iconStyle, "width": '5rem'}}>
          <img src={jasmineLogo}></img>
        </div>
        <div title="Mocha" style={{...iconStyle, "width": '5rem'}}>
          <img src={mochaLogo}></img>
        </div>
        <div title="Jest" style={{...iconStyle, "width": '5rem'}}>
          <img src={jestLogo}></img>
        </div>
        <div title="pytest" style={{...iconStyle, "width": '5rem'}}>
          <img src={pytestLogo}></img>
        </div>
        <div
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4.8rem",
            "overflowY": "hidden",
            "backgroundColor": "white",
            "borderRadius": "10px"
          }}>
          <div title="BASH" style={{...iconStyle, "width": '5rem'}}>
            <img src={bashLogo}></img>
          </div>
        </div>
      </section>
      <section style={iconSectionStyle}>
        <div
          title="Amazon Web Services"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4.8rem",
            "overflowY": "hidden",
            "backgroundColor": "white",
            "borderRadius": "10px"
          }}
        >
          <div style={{...iconStyle, "width": '10rem'}}>
            <img src={awsLogo} style={{"width": '10rem'}}></img>
          </div>
        </div>
        <div title="Linux" style={{...iconStyle, "width": '5rem'}}>
          <img src={linuxLogo}></img>
        </div>
        <div title="Docker" style={{...iconStyle, "width": '5rem'}}>
          <img src={dockerLogo}></img>
        </div>
        <div
          title="ngnix"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4.8rem",
            "overflowY": "hidden",
          }}
        >
          <div style={{...iconStyle, "width": '7rem'}}>
            <img src={nginxLogo} style={{"width": '7rem'}}></img>
          </div>
        </div>

        {/* <div style={{...iconStyle, "width": '5rem'}}>
          <img src={herokuLogo}></img>
        </div> */}
      </section>

      <section style={iconSectionStyle}>
        <div
          title="Webpack"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}
        >
          <div style={{...iconStyle, "width": '10rem'}}>
            <img src={webpackLogo} style={{"width": "10rem"}}></img>
          </div>
        </div>
        <div
          title="Babel"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "4rem",
            "overflowY": "hidden",
          }}
        >
          <div style={{...iconStyle, "width": '7rem'}}>
            <img src={babelLogo} style={{"width": "7rem"}}></img>
          </div>
        </div>
        <div
          title="Vite"
          style={{...iconStyle, "width": '3.5rem'}}
        >
          <img src={viteLogo} style={{"width": "3.5rem"}}></img>
        </div>
        <div
          title="Markdown"
          style={{
            "display": "flex",
            "alignItems": "center",
            "height": "3rem",
            "overflowY": "hidden",
            "backgroundColor": "white",
            "borderRadius": "10px"
          }}
        >
          <div title="Markdown" style={{...iconStyle, "width": '4.3rem'}}>
            <img src={markdownLogo} style={{"width": "4rem"}}></img>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}