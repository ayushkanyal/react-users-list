import style from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div className={style.overlay}></div>;
};

const Modal = (props) => {
  return (
    <div className={style.error}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.text}</p>
      </div>
      <footer>
        <button onClick={props.onClick}>Okay</button>
      </footer>
    </div>
  );
};

export default function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Modal title={props.title} text={props.text} onClick={props.onClick} />,
        document.getElementById("modal-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}
