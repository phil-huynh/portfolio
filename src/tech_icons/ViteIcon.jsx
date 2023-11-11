import viteLogo from '/vite.svg'

export default function ViteIcon() {

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div
      title="Vite"
      className="svg-shadow"
      style={{...iconStyle, "width": '2.5rem'}}
    >
      <img src={viteLogo} style={{"width": "3.5rem"}}></img>
    </div>
  )
}

// xmlns:xlink="http://www.w3.org/1999/xlink"