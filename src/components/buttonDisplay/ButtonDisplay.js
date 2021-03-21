import Button from '../button/Button';

const ButtonDisplay = (props) => {
    return(
        <div className="button">
            <Button name="1" onClick={props.onClick}/>
            <Button name="2" onClick={props.onClick}/>
            <Button name="3" onClick={props.onClick}/>
            <Button name="4" onClick={props.onClick}/>

            <Button name="5" onClick={props.onClick}/>
            <Button name="6" onClick={props.onClick}/>
            <Button name="7" onClick={props.onClick}/>
            <Button name="8" onClick={props.onClick}/>

            <Button name="9" onClick={props.onClick}/>
            <Button name="0" onClick={props.onClick}/>
            <Button name="." onClick={props.onClick}/>
            <Button name="*" onClick={props.onClick}/>
            
            <Button name="/" onClick={props.onClick}/>
            <Button name="+" onClick={props.onClick}/>
            <Button name="-" onClick={props.onClick}/>
            <Button name="=" onClick={props.onClick}/>

            <Button name="C" onClick={props.onClick}/>
            <Button name="CE" onClick={props.onClick}/>
        </div>
    );
}

export default ButtonDisplay;