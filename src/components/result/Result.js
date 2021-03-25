import "./Result.css";

const Result = (props) => {
    return(
        <div className="result">
            <input value={props.result} placeholder="0" />
        </div>
    );
}

export default Result;