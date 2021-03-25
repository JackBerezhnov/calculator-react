import "./Button.css";

const Button = (props) => {

    return(
        <button className="button" name={props.name} onClick={e => props.onClick(e.target.name)}>{props.name}</button>
    );
}

export default Button;