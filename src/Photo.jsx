export default function Photo({image, width, aspect, extras={}}) {

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: width,
    aspectRatio: aspect
  }
  return (
    <div style={{...style, ...extras}}></div>
  )
}