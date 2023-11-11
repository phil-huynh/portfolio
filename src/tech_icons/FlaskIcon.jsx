export default function FlaskIcon() {

  const iconStyle = {
    "display": "flex",
    "placeContent": "center",
    // "border": "solid black 1px"
  }

  return (
    <div className="svg-shadow" style={{...iconStyle, "width": '6.2rem'}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path
          fill="#FFFFFF"
          d="M18.767 82.685c-2.043-1.606-4.224-3.146-5.713-5.317-3.135-3.828-5.548-8.258-7.198-12.914-.998-3.028-1.339-6.275-2.625-9.185-1.344-2.114.231-4.425 2.547-5.097 1.03-.198 2.843-1.171.655-.476-1.962 1.44-2.151-1.306-.139-1.481 1.372-.181 1.878-1.305 1.408-2.316-1.474-.962 3.574-2.017 1.034-3.452-2.645-2.855 3.7-3.404 2.135-.162-.375 2.492 4.435-.458 3.318 2.421 1.135 1.383 4.248.315 4.17 2.254 1.652.114 2.22 1.503 3.77 1.61 1.608.727 4.521 1.298 5.068 3.11-1.594 1.261-5.286-2.608-5.464.886.482 5.163.358 10.48 2.248 15.396.893 2.978 3.059 5.32 5.015 7.64 1.872 2.271 4.407 3.869 6.991 5.214 2.266 1.069 4.709 1.777 7.18 2.223 1.001-.766 2.771-3.614 4.333-2.413.075 1.35-3.101 2.822-.149 2.674 1.734-.525 2.936 1.34 4.364-.343 1.315 1.558 5.467-.994 4.531 2.19-1.267.816-3.112.321-4.379 1.447-2.09-1.045-3.753.933-6.068.685-2.569.458-5.184.645-7.789.648-4.274-.337-8.638-.48-12.703-1.967-2.293-.666-4.527-1.972-6.54-3.275zm3.608 1.565c2.236.966 4.423 1.985 6.874 2.293 3.889.54 7.905 1.373 11.808.615-1.767-.798-3.593.308-5.353-.571-2.11.455-4.375-.115-6.521-.396-2.439-1.086-5.072-1.834-7.357-3.245-2.855-1.043 1.476 1.338 2.248 1.531 1.784 1.013-1.962-.52-2.491-.94-1.495-.839-1.686-.664-.148.188.31.179.616.371.94.525zm-4.256-3.008c2.168.804-.009-1.524-1.001-1.389-.44-.764-1.682-1.246-.806-1.655-1.574.547-1.65-2.079-2.389-1.704-1.667-.526-.648-2.39-2.634-3.534-.181-1.206-1.971-2.251-2.542-4.07-.252-.932-2.024-3.605-.936-1.118.926 2.396 2.555 4.449 3.913 6.498 1.052 1.95 2.296 3.991 4.213 5.208.646.62 1.27 1.57 2.182 1.764zm-6.242-6.855c.074-.327.396.708 0 0zm8.839 7.818c.479-.217-.691-.272 0 0zm1.176.428c-.121-.593-.538.332 0 0zm1.473.613c.7-.667-1.081-.421 0 0zm2.524 1.407c.426-.628-1.364-.236 0 0zm-4.847-3.378c1.088-.705-1.407-.009 0 0zm1.104.551c-.031-.372-.393.166 0 0zm5.521 3.446c.888.561 5.184 1.227 2.494.229-.451.096-4.988-1.282-2.494-.229zm-8.763-6.827c-.087-.372-1.38-.412 0 0zm2.568 1.499c.67-.466-1.388-.36 0 0zm2.163 1.326c.96-.363-1.557-.364 0 0zm-5.779-3.964c1.042.8 4.202.104 1.595-.476-1.186-.632-3.858-1.064-2.036.381l.441.095zm7.243 4.421c.435-.739-1.82-.422 0 0zm-2.201-1.749c2.546.721-2.141-1.611-.628-.265l.335.151.293.114zm4.414 2.55c2.411.024-2.179-.332 0 0zm-10.384-6.617c-.094-.449-.594.037 0 0zm14.462 8.906c.064-.81-.786.604 0 0zm-10.345-6.385c-.147-.428-.754-.019 0 0zm-3.887-2.802c1.384-.085-1.897-.609 0 0zm-4.606-2.977c-.173-.665-1.506-1.193 0 0zm12.09 7.673c-.253-.29-.12.063 0 0zm7.524 4.617c-.023-.442-.41.167 0 0zm-8.19-5.305c.136-.571-1.181-.174 0 0zm-5.606-3.553c1.03-.11-1.651-.697 0 0zm9.483 5.891c1.605-.635-1.565-.309 0 0zm-4.933-3.347c1.85.238-2.201-1.259-.407-.135l.407.135zm6.43 3.954c1.728-1.032 1.158 2.418 2.931.291 1.748-1.277-1.51 1.578.644.228 1.559-1.042 3.861.494 5.315.995 1.045-.051 2.062.904 3.135.322 2.064-.556-4.037-.824-2.438-1.809-1.888.549-3.282-.655-4.212-1.865-2.119-.489-4.566-1.573-5.625-3.448-.432-.703.622.101-.373-1.05-1.276-1.136-1.913-2.426-2.77-3.805-1.023-.545-1.144-2.152-1.247-.054.008-1.324-1.236-2.216-1.541-1.847-.005-1.276 1.333-.636.396-1.58-.201-1.323-.865-2.7-1.064-4.193-.309-.721-.043-2.262-1.058-.633-.369 1.722-.122-2.115.453-.851.753-1.292-.271-1.139-.313-.961.491-1.089.311-2.634-.129-2.045.261-1.155.413-4.251-.391-3.701.488-1.208.926-5.528-1.193-3.881-.858.013-2.345.31-3.046.66 2.201 1.214-.222.439-1.12.245-.116 1.125-1.004.64-2.114.65 1.772.218-.863 1.813-1.878 1.193-1.321.63 1.139 2.207.026 2.694.137.733-2.023-.266-1.854 1.43-1.282-.541-.175 2.012.466 1.148 2.18.591 1.534 1.935 1.589 3.212-.355.745-1.754-1.75-.312-1.634-1.138-1.849-1.258-.668-2.205.191-.219.061 2.412 1.222.761 1.795 1.452.225 1.495 1.495 1.792 2.3.872.91.693-1.004 1.738.09-.662-.976-3.503-2.746-1.216-2.178-.012-.98-.414-1.771.288-1.752.695-1.256-.728 3.1.837 1.503.434-.19.541-1.258 1.32.101 1.13 1.113.409 1.919-1.187.897.285.971 2.134 1.315 1.786 2.829.368 1.333.884.842 1.333.765.352 1.294.553.343.569-.272 1.612.345 1.234 1.298 1.74 1.965 1.112.5-1.591-3.4.317-1.173 2.007 1.812.753 2.567-1.048 2.278 1.14-.093 1.507 1.541 2.934 1.484 1.301.618 2.182 2.994-.061 2.005-.777-.702-3.53-1.566-1.28-.232 2.075.961 3.724 1.535 5.726 2.743 1.432 1.021 2.051 2.192 2.594 2.427-1.204.572-3.628-.461-1.828-.777-1.124-.203-2.387-.773-1.312.627.916.764 3.241.685 3.659.77-.354.777-.96.84.013.9-1.083.581.353.672.453 1.003zm-2.223-6.277c-.662-.692-.834-1.986-.118-.861.367.148 1.175 2.116.118.861zm7.239 4.597c.413-.027.013.314 0 0zm-8.283-6.295c-.026-1.045.239.807 0 0zm-.719-.966c-.833-1.607 1.049.454 0 0zm-8.72-6.018c.489-.131.241.834 0 0zm6.94 3.76c.3-1.127.353.945 0 0zm-4.903-3.409c-.345-.621.723.584 0 0zm4.207 1.349c-.788-1.766.56-.965.175.289l-.175-.289zm-7.256-4.839c-.352-.579-.935-2.278-.746-2.798.168.846 1.796 3.637.797 1.156-1.103-2.079 1.319.673 1.568 1.194.117.516-.681-.141-.141 1.069-.984-1.377-.58.761-1.478-.621zm-2.241-1.546c.092-1.347.512.923 0 0zm1.008.349c.481-1.017.815 1.417 0 0zm-2.427-1.878c-.834-.831-1.438-1.594.041-.514.568.021-1.267-1.741.136-.561 1.475.27.728 2.419-.177 1.075zm1.275-.033c.485-.481.257.473 0 0zm.785.251c-.736-1.377.892.579 0 0zm-1.559-1.489c-2.426-2.161 3.049 1.128.396.4l-.396-.4zm6.954 4.039c-1.051-.629-.28-4.432.08-1.832 1.02-.33-.057 1.344.704 1.328-.12 1.057-.461 1.435-.784.504zm2.572 1.522c.103-1.147.216.782 0 0zm-.447-.444c.115-.487.011.578 0 0zm-8.604-5.827c-1.56-2.15 4.531 2.177.999.546-.369-.097-.814-.133-.999-.546zm4.954 2.625c-.148-1.811.328.3 0 0zm3.759 2.413c.291-1.031.023.682 0 0zm-8.473-5.859c.927-.198 3.839 1.626 1.165.521-.297-.329-.932-.18-1.165-.521zm7.957 3.966c.099-1.853.554-1.105.004.265l-.004-.265zm-7.268-4.611c.377-.554-1.003-2.503.199-.698.519.412 1.502.69.634.863 1.366 1.206-.332.326-.833-.165zm6.874 4.033c.261-2.11.231 1.235 0 0zm-7.664-5.982c.29-.123.154.385 0 0zm1.795 1.067c.461-.969.85 1.08 0 0zm5.056 2.814c-.003-.373.097.541 0 0zm-.292-.649c-.701-1.731.653.917 0 0zm-.431-1.136c-.117-.714.401.899 0 0zm.703-1.14c-.483-.849.607-3.74.73-1.946-.509 1.396-.146 2.179.207.305.655-1.476-.142 2.91-.937 1.641zm.72-4.301c.21-.257.047.311 0 0zm-1.204 23.725c-.286-.25.036.157 0 0zm2.48 1.253c1.38.354 1.373-.215.126-.384-.67-.624-2.787-1.286-.892-.078.124.319.52.311.766.462zm-4.897-3.253c.759.568 2.862 1.605 1.083.216.6-.696-1.148-1.068-.569-1.535-1.476-.902-1.165-.821-.13-.793-1.773-.794.256-.733.161-1.141-.684-.135-3.397-1.206-1.801.088-1.622-.826-.387.308-.877.188-1.66-.451 1.477 1.264-.263.838.951.753 2.561 1.933.401.797-.284.41 1.545 1.03 1.995 1.342zm2.593 1.49c3.153 1.014-1.547-1.242 0 0zm13.278 8.045c.041-.626-.43.533 0 0zm1.365.573c.728-.703.03 1.124 1.205-.172.013-.928-.035-1.477-1.35-.35-.364.203-.525 1.055.145.522zM12.589 70.896c-.223-.876-1.567-.874 0 0zm1.456.956c-.541-.897-1.93-.813 0 0zm8.292 5c.81.72 3.718.528.983.089-.404-.599-2.571-.457-.983-.089zm11.396 7.039c1.246-1.046-1.207.465 0 0zm2.592 1.78c.008-.336-.537.146 0 0zm.004-.47c1.379-1.462-1.336.086 0 0zM9.004 67.896c-1.176-1.677-.731-2.431-1.864-3.801-.216-1.048-1.946-3.425-.895-.907.962 1.473 1.247 3.753 2.759 4.708zm26.892 16.841c2.539-1.64-1.042-.716 0 0zm1.937.758c1.272-1.092-.804-.227 0 0zM12.158 69.042c.363-.54-.94-.07 0 0zm25.271 15.935c1.231-.792-.284-.671-.223.072l.223-.072zM20.728 74.451c-.042-.536-.65.045 0 0zm1.032.593c-.329-.663-.504.105 0 0zm17.643 10.469c1.577-1.138-.955-.217-.33.216l.33-.216zm-.604-.291c1.285-1.077-1.355.476 0 0zm3.086 2.054c.863-.578-1.049-.187 0 0zM12.948 68.652c1.155.259 4.619 2.847 2.576.18-1.047-.31-.419-2.868-1.487-2.416.717 1.198.589 1.706-.915.952-1.89-.924-1.063.457-.692.837-.504.114.666.439.518.447zm-5.265-4.158c.207-.857-1.906-4.708-.998-1.931.327.582.294 1.684.998 1.931zm9.665 5.959c-.597-.498-.029-.072 0 0zm1.465.341c0-.906-1.62-.369 0 0zM31.515 78.8c-.243-.618-.957-.014 0 0zm.61.445c-.091-.347-.352.068 0 0zm5.034 3.172c.484-.356-.604-.046 0 0zM10.312 65.165c1.385-.536-1.485-.382 0 0zm20.084 12.652c-.015-.895-.883.224 0 0zM9.765 63.89c.889-.301-.824-.198 0 0zm2.581 1.25c-.014-.294-.272.113 0 0zm31.496 19.313c1.144-.229 3.751.582 4.172-.303-1.39-.034-4.806-.979-4.967.225l.304.048.491.03zM13.167 65.348c.021-.91-.708-.035 0 0zm-6.788-4.71c-.308-1.731-1.173-.263 0 0zm1.618.406c.021-.556-1.481-.5 0 0zm.926.455c-.268-.216-.209.273 0 0zm5.821 3.734c.275-.253-.649-.186 0 0zm-6.436-4.759c-.158-1.307-1.877-.195 0 0zm-3.322-2.153c-.046-.604-.322.227 0 0zm.495-.373c-.08-.717-.424.09 0 0zm2.727 1.627c1.154-.452-2.1-.937-.236-.085l.236.085zm36.509 22.552c.739-.677-.937-.209 0 0zm4.411 2.285c.296-.872-.746.116 0 0zM8.488 58.147c.121-.848-.916.167 0 0zm-3.882-2.601c-.208-1.195-.179-3.292 1.814-2.584-2.661.529 1.843 3.309 1.275 1.113 1.119.056 2.188-.661 1.602.425 2.205-.242 3.733-2.155 5.864-1.887 1.659-.22 3.474-.387 5.261-1.055 1.471-.105 2.887-1.688 2.081-2.626-2.005-.17-4.104.082-6.32.522-2.455.51-4.686 1.479-7.164 1.896-2.416.325.485.895-.208 1.021-1.259.438 1.504.732-.163 1.193-1.029-.196-2.101-.549-1.661-1.634-2.313.301-4.347 1.26-2.519 3.614l.138.002zm5.576-2.839c.542-1.998 2.905 1.644.888.265-.24-.181-.637-.328-.888-.265zm.105-.97c.783-.582.415.328 0 0zm.993.017c.072-.919 2.277.487.364.331l-.364-.331zm1.36-.546c.497-.582.144.514 0 0zm.348-.233c.827-.994 4.681-.636 1.86-.098-.756-.569-1.335.336-1.86.098zm5.032-.776c-.125-2.715 2.5.963 0 0zm1.428-.01c.521-1.365 2.026-.548.242-.274.038.147-.053.708-.242.274zM7.925 57.445c1.559-.955-1.655-.83 0 0zm1.153.319c.547-.581-1.189-.235 0 0zm-3.398-2.41c.891-.686-1.055-.261 0 0zm46.051 28.809c.027-.795-.681.357 0 0zm-4.679-3.193c.134-.914-.602.079 0 0zm5.966 3.501c1.246.006 3.775-.387 1.064-.386-.426.065-2.478.053-1.064.386zM10.092 57.204c1.009-.068 1.578-1.112-.196-1.053-2.747-.282 2.424.942-.353.592-.371.246.528.529.549.461zm.888.449c-.105-.646-.312.344 0 0zm1.054-2.809c.437-.542-.606-.145 0 0zM8.68 49.239c1.8-.611 4.262-1.3 5.111.301-.865-1.04-.35-2.065.468-.543 1.155 1.539 1.732-.7.982-1.217.856 1.063 1.829 1.567.573.067 1.366-1.642-2.734.216-3.665.197-.449.2-4.629 1.065-3.469 1.195zm1.055-2.02c1.025-.775 3.55.461 1.93-.771-.159-.139-3.545.935-1.93.771zm3.743.155c1.2.03-.519-1.615.912-.87-.234-.767-1.666-.91-2.366-1.218-.397.703.805 2.097 1.454 2.088zm-3.087-3.397c.416-.564-.728.286 0 0zm1.53.365c1.936-.256-.494-.833-.391-.02l.391.02zm-2.856-2.233c-1.364-1.781 2.564.299 1.178-1.565-1.166-.928-2.285 1.047-1.178 1.565zm17.491 9.421c.625-1.108-2.58-1.494-.42-.392.197.065.153.467.42.392zm0 0"
        />
        <path
          fill="#FFFFFF"
          d="M56.063 43.886c-.223.883-.362 2.362-.414 4.44 0 .409-.184.613-.553.613-.368 0-.625-.178-.769-.533-.395-.961-.77-1.63-1.125-2.013-.42-.447-.98-.717-1.677-.809-.75-.118-2.617-.178-5.604-.178-.683 0-1.132.073-1.341.217-.132.092-.197.29-.197.594v8.938c0 .304.19.447.571.435 1.171-.014 2.868-.094 5.09-.238.434-.052.727-.195.878-.424.152-.229.3-.825.444-1.786.092-.526.401-.73.927-.611.448.092.64.296.573.611-.369 1.79-.488 4.118-.356 6.986.014.342-.203.526-.65.552-.369.04-.599-.158-.691-.592-.341-1.644-.977-2.521-1.903-2.635-.928-.11-2.437-.166-4.528-.166-.237 0-.354.083-.354.255v8.882c0 .656.242 1.104.729 1.341.383.196 1.204.374 2.467.532.646.064.927.35.849.848-.08.435-.658.605-1.737.513-3.118-.249-5.689-.235-7.714.041-.566.077-.848-.151-.848-.69 0-.342.282-.539.848-.592 1.289-.146 1.933-1.277 1.933-3.395V48.127c0-.866-.154-1.534-.463-2-.31-.468-.885-.894-1.727-1.274-.526-.237-.722-.56-.591-.968.065-.25.171-.388.315-.414.131-.04.481-.013 1.045.079.829.132 2.783.198 5.86.198 3.632 0 6.768-.08 9.413-.237.881-.053 1.322.019 1.322.216a.693.693 0 01-.022.159zm0 0M68.889 68.967c0 .525-.297.757-.889.688-1.813-.169-4.064-.145-6.747.079-.54.054-.871.039-.998-.038-.125-.079-.187-.296-.187-.653 0-.314.358-.58 1.075-.797.718-.217 1.076-.866 1.076-1.944V48.445c0-1.067-.155-1.849-.463-2.349-.31-.5-.852-.888-1.628-1.163-.408-.145-.612-.349-.612-.613 0-.394.296-.69.887-.887.896-.29 1.823-.735 2.784-1.342.789-.474 1.289-.708 1.499-.708.487 0 .73.334.73 1.006 0-.053-.027.605-.079 1.972-.038 1.302-.052 2.584-.038 3.848l.077 17.619c0 .804.198 1.387.593 1.748.395.362 1.072.602 2.031.72.592.063.889.288.889.671zm0 0M86.883 67.643c0 .278-.503.695-1.508 1.253-1.007.56-1.813.839-2.418.839-.514 0-.966-.248-1.361-.75-.395-.499-.671-.749-.83-.749-.117 0-.741.271-1.873.808-1.13.541-2.27.812-3.413.812-1.078 0-1.98-.317-2.704-.947-.788-.697-1.184-1.646-1.184-2.843 0-2.275 2.604-3.906 7.814-4.893.894-.171 1.348-.533 1.359-1.086l.042-1.263c.077-2.157-.876-3.235-2.862-3.235-.565 0-1.103.504-1.609 1.518-.505 1.013-1.232 1.559-2.179 1.639-1.078.104-1.619-.35-1.619-1.362 0-.632.804-1.368 2.408-2.211 1.683-.88 3.303-1.321 4.854-1.321 2.67 0 3.993 1.27 3.966 3.809l-.08 8.128c-.011.855.351 1.283 1.087 1.283.145 0 .421-.033.828-.099a8.25 8.25 0 01.711-.099c.381 0 .571.258.571.769zm-6.075-4.498c.012-.329-.064-.547-.229-.651-.163-.105-.423-.125-.778-.06-3.171.566-4.755 1.599-4.755 3.097 0 1.513.822 2.27 2.466 2.27.658 0 1.336-.124 2.032-.373.816-.291 1.223-.64 1.223-1.047l.041-3.236zm0 0M101.604 65.294c0 1.396-.537 2.504-1.608 3.326-1.071.823-2.535 1.234-4.392 1.234-1.234 0-2.473-.131-3.709-.396-1.065-.237-1.684-.453-1.854-.65-.106-.186-.158-1.085-.158-2.703 0-.699.158-1.06.476-1.086.313-.04.583.131.808.512.986 1.724 2.578 2.587 4.774 2.587 1.854 0 2.781-.646 2.781-1.935 0-.564-.208-1.039-.631-1.42-.461-.435-1.354-.942-2.683-1.52-1.921-.855-3.204-1.605-3.848-2.25-.697-.684-1.047-1.604-1.047-2.763 0-1.42.546-2.525 1.639-3.314 1.014-.762 2.367-1.144 4.063-1.144 1.066 0 2.04.085 2.921.256.948.172 1.441.382 1.481.632.104.736.322 1.802.649 3.198.041.17-.145.308-.552.413-.435.092-.723.019-.867-.216-1.041-1.698-2.354-2.547-3.947-2.547-1.802 0-2.704.579-2.704 1.737 0 .646.245 1.157.73 1.538.435.329 1.454.842 3.059 1.54 1.684.723 2.828 1.375 3.433 1.953.793.75 1.186 1.757 1.186 3.018zm0 0M124.493 68.847c0 .461-.31.705-.928.73-.922.014-2.125.078-3.611.196-.736.146-1.263.055-1.579-.274-2.078-2.237-3.841-4.578-5.288-7.025-.117-.21-.27-.315-.453-.315-.225 0-.612.198-1.163.592-.62.341-.929.828-.929 1.458 0 .449.013 1.093.039 1.936.026.841.236 1.394.632 1.656.276.186.914.33 1.913.435.618.079.928.31.928.69 0 .304-.05.491-.147.563-.098.073-.359.089-.78.049-1.315-.117-3.537-.051-6.67.197-.788.065-1.216-.032-1.28-.296a1.47 1.47 0 01-.041-.396c0-.406.401-.716 1.204-.925.725-.186 1.085-1.033 1.085-2.546V48.326c0-1.078-.104-1.828-.314-2.248-.289-.541-.896-.962-1.816-1.265-.434-.144-.65-.347-.65-.611 0-.382.31-.678.927-.887a12.36 12.36 0 002.82-1.362c.725-.474 1.172-.711 1.343-.711.539 0 .81.342.81 1.027 0-.093-.006.559-.021 1.952-.013.961-.02 2.25-.02 3.869l.04 12.35c0 .344.093.514.275.514.196 0 .5-.17.908-.514a103.59 103.59 0 004.024-3.354c.317-.329.474-.591.474-.789 0-.355-.532-.605-1.597-.75-.46-.054-.68-.31-.653-.771.041-.459.271-.657.692-.591.947.132 2.329.204 4.143.217 1.264.012 2.52.02 3.77.02.407.014.611.256.611.73 0 .447-.322.69-.966.73a7.255 7.255 0 00-2.861.69c-1.251.566-2.586 1.559-4.007 2.979a.358.358 0 00-.157.295c0 .185.223.625.671 1.323 1.645 2.5 3.197 4.387 4.656 5.663.935.802 1.809 1.203 2.625 1.203.604 0 .98.043 1.124.129.144.088.217.315.217.683zm0 0"
        />
      </svg>
    </div>
  )
}