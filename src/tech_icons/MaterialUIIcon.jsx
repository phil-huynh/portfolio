export default function MaterialUIIcon() {

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }


  return (
    <div title="Material UI" className="svg-shadow" style={{...iconStyle, "width": '5rem'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill="#1FA6CA"
          d="M.2 68.6V13.4L48 41v18.4L16.1 41v36.8L.2 68.6z"
        />
        <path
          fill="#1C7FB6"
          d="M48 41l47.9-27.6v55.3L64 87l-16-9.2 32-18.4V41L48 59.4V41z"
        />
        <path
          fill="#1FA6CA"
          d="M48 77.8v18.4l32 18.4V96.2L48 77.8z"
        />
        <path
          fill="#1C7FB6"
          d="M80 114.6L127.8 87V50.2l-16 9.2v18.4L80 96.2v18.4zM111.9 41V22.6l16-9.2v18.4l-16 9.2z"
        />
      </svg>
    </div>
  )
}