export default function BulmaIcon({ width }) {

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div title="Bulma" className="svg-shadow" style={{...iconStyle, "width": width}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill="#00D1B2"
          d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"
        />
      </svg>
    </div>
  )
}