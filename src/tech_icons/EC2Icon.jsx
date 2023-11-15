export default function EC2Icon ({ width, height }) {

  const containerStyle = {
    "height": height,
    "overflow": "hidden",
    "display": "flex",
    "alignItems": "center",
  }

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div style={containerStyle}>
      <div
        title="AWS: EC2"
        className="svg-shadow"
        style={{...iconStyle, "width": width, "aspectRatio": "1/1"}}
      >
        <svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="linearGradient-1">
              <stop stopColor="#C8511B" offset="0%"></stop>
              <stop stopColor="#FF9900" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g id="Icon-Architecture/64/Arch_Amazon-EC2_64" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Icon-Architecture-BG/64/Compute" fill="#E97D11">
              <rect id="Rectangle" x="0" y="0" width="80" height="80"></rect>
            </g>
            <path
              id="Amazon-EC2_Icon_64_Squid"
              fill="#FFFFFF"
              d="M27,53 L52,53 L52,28 L27,28 L27,53 Z M54,28 L58,28 L58,30 L54,30 L54,34 L58,34 L58,36 L54,36 L54,39 L58,39 L58,41 L54,41 L54,45 L58,45 L58,47 L54,47 L54,51 L58,51 L58,53 L54,53 L54,53.136 C54,54.164 53.164,55 52.136,55 L52,55 L52,59 L50,59 L50,55 L46,55 L46,59 L44,59 L44,55 L41,55 L41,59 L39,59 L39,55 L35,55 L35,59 L33,59 L33,55 L29,55 L29,59 L27,59 L27,55 L26.864,55 C25.836,55 25,54.164 25,53.136 L25,53 L22,53 L22,51 L25,51 L25,47 L22,47 L22,45 L25,45 L25,41 L22,41 L22,39 L25,39 L25,36 L22,36 L22,34 L25,34 L25,30 L22,30 L22,28 L25,28 L25,27.864 C25,26.836 25.836,26 26.864,26 L27,26 L27,22 L29,22 L29,26 L33,26 L33,22 L35,22 L35,26 L39,26 L39,22 L41,22 L41,26 L44,26 L44,22 L46,22 L46,26 L50,26 L50,22 L52,22 L52,26 L52.136,26 C53.164,26 54,26.836 54,27.864 L54,28 Z M41,65.876 C41,65.944 40.944,66 40.876,66 L14.124,66 C14.056,66 14,65.944 14,65.876 L14,39.124 C14,39.056 14.056,39 14.124,39 L20,39 L20,37 L14.124,37 C12.953,37 12,37.953 12,39.124 L12,65.876 C12,67.047 12.953,68 14.124,68 L40.876,68 C42.047,68 43,67.047 43,65.876 L43,61 L41,61 L41,65.876 Z M68,14.124 L68,40.876 C68,42.047 67.047,43 65.876,43 L60,43 L60,41 L65.876,41 C65.944,41 66,40.944 66,40.876 L66,14.124 C66,14.056 65.944,14 65.876,14 L39.124,14 C39.056,14 39,14.056 39,14.124 L39,20 L37,20 L37,14.124 C37,12.953 37.953,12 39.124,12 L65.876,12 C67.047,12 68,12.953 68,14.124 L68,14.124 Z"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
