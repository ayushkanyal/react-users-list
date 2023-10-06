import style from "./List.module.css";

export default function List(props){
    console.log(props.list);
    const recieved = props.list;
    const itemsList = recieved.map((entry) => (<li><span className={style.border}>{entry.username} ({entry.age} years old)</span></li>));
    return (
        <ul className={style.ul}>
            {itemsList}
        </ul>
    )
}