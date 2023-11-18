export default function Photo({image, width, aspect, extras={}}) {

  const style = {
    "backgroundImage": `url(${image})`,
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "margin": "1rem",
    "width": width,
    "aspectRatio": aspect
  }
  return (
    <div style={{...style, ...extras}}></div>
  )
}