import style from "./List.module.css";

export default function List(props) {
    console.log("List was activated");
  console.log(props.list);
  const recieved = props.list;
 
  return (
    <ul className={style.ul}>
      {recieved.length === 0 ? (
        ""
      ) : (
        recieved.map((entry) => (
          <li>
            <span className={style.border}>
              {entry.username} ({entry.age} years old)
            </span>
          </li>
        ))
      )}
      ;
    </ul>
  );
}
