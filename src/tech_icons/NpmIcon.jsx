import { useStore } from "../Store"

export default function NpmIcon() {

  const containerStyle = {
    "height": "3.5rem",
    "overflow": "hidden",
    "display": "flex",
    "alignItems": "center"
  }

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }
  const {locate} = useStore()

  return (
    <div style={containerStyle} title="npm">
      <div title="npm" className="svg-shadow" style={{...iconStyle, "width": '3rem'}}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <path
            fill="#cb3837"
            d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"
          />
        </svg>
      </div>
    </div>
  )
}