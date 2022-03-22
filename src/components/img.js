

function Image (props) {
    return  <div className="w3-third w3-margin-bottom">
    <img
      src={surat}
      alt={props.imia}
      style={{ width: "100%" }}
      className="w3-hover-opacity"
    />
    <div className="w3-container w3-white">
      <p>
        <b>{props.imia}</b>
      </p>
      <p className="w3-opacity">Fri 27 Nov 2016</p>
      <p>
        Praesent tincidunt sed tellus ut rutrum sed vitae justo.
      </p>
      <button className="w3-button w3-black w3-margin-bottom">
      {props.text}
      </button>
    </div>
  </div>
}


export default Image