import './Message.style.css';

//export const Message = (props) => {
export const Message = ({name, num, doSmth}) => {
    //console.log(props);
    return (
        //<h3>I am message for: {props.name} </h3>
        <h3 className="message" onClick={doSmth}>
            I am message for: {name}, {num}
        </h3>
    )
}