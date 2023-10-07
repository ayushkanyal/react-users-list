import style from "./ErrorModal.module.css";

export default function ErrorModal(props){

    function handleClick(){
        props.onClick();
    }

    return(
        <div className={style.error}>
            <header>
                <h2>{props.title}</h2>
            </header>
            <div>
                <p>{props.text}</p>
            </div>
            <footer>
                <button onClick={handleClick}>
                    Okay
                </button>
            </footer>
        </div>
    )
}
