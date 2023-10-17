export default function Unicorn() {
  return (
    <div>
      <div className="static">
        <img
          className="m-12 h-32 static"
          src="/images/textbox.png"
          alt="text box"
        ></img>
        <div>
          <p className="z-10 absolute top-24 left-24">hello!</p>
        </div>
      </div>
      <img
        className="m-12 h-64 mt-12"
        src="/images/unicorn.png"
        alt="illustrated unicorn"
      ></img>
    </div>
  )
}
