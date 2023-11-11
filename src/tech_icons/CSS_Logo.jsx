import { motion } from "framer-motion"

export default function CSSLogo() {

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div
      title="CSS"
      className="svg-shadow"
      style={{...iconStyle, "width": '4rem'}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill="#FFFFFF"
          d="M89.234 5.856H81.85l7.679 8.333v3.967H73.713v-4.645h7.678l-7.678-8.333V1.207h15.521v4.649zm-18.657 0h-7.384l7.679 8.333v3.967H55.055v-4.645h7.679l-7.679-8.333V1.207h15.522v4.649zm-18.474.19h-7.968v7.271h7.968v4.839H38.471V1.207h13.632v4.839z"
        />
        <path
          fill="#1572B6"
          d="M27.613 116.706l-8.097-90.813h88.967l-8.104 90.798-36.434 10.102-36.332-10.087z"
        />
        <path
          fill="#33A9DC"
          d="M64.001 119.072l29.439-8.162 6.926-77.591H64.001v85.753z"
        />
        <path
          fill="#fff"
          d="M64 66.22h14.738l1.019-11.405H64V43.677h27.929l-.267 2.988-2.737 30.692H64V66.22z"
        />
        <path
          fill="#EBEBEB"
          d="M64.067 95.146l-.049.014-12.404-3.35-.794-8.883H39.641l1.561 17.488 22.814 6.333.052-.015V95.146z"
        />
        <path
          fill="#fff"
          d="M77.792 76.886L76.45 91.802l-12.422 3.353v11.588l22.833-6.328.168-1.882 1.938-21.647H77.792z"
        />
        <path
          fill="#EBEBEB"
          d="M64.039 43.677v11.137H37.136l-.224-2.503-.507-5.646-.267-2.988h27.901zM64 66.221v11.138H51.753l-.223-2.503-.508-5.647-.267-2.988H64z"
        />
      </svg>
    </div>
  )
}