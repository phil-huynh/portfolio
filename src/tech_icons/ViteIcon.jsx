import viteLogo from '/vite.svg'

export default function ViteIcon({ width }) {

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div
      title="Vite"
      className="svg-shadow"
      style={{...iconStyle, "width": width}}
    >
      <img src={viteLogo} ></img>
    </div>
  )
}

// xmlns:xlink="http://www.w3.org/1999/xlink"