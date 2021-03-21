const Button = (props) => {
    function handleClick(e) {
        console.log("It is a current value button", e.target.name);
    }

    return(
        <button name={props.name} onClick={handleClick}>{props.name}</button>
    );
}

export default Button;