import style from "./ErrorModal.module.css";

export default function ErrorModal(props){

    function handleClick(){
        props.onClick();
    }

    return(
        <div className={style.error}>
            <header>
                <h2>Error</h2>
            </header>
            <div>
                <p>There was an error with the input</p>
            </div>
            <footer>
                <button onClick={handleClick}>
                    Okay
                </button>
            </footer>
        </div>
    )
}