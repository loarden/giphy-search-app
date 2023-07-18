import { Gif } from "@giphy/react-components";

function Modal({ gif, setGif }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        background: "rgba(0, 0, 0, .8)",
      }}
      onClick={(e) => {
        e.preventDefault();
        setGif(() => '')
      }}
    >
      <Gif gif={gif} width={500} />
    </div>
  );
}

export default Modal;
