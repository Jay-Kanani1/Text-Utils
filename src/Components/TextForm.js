import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const convertUpperCase = () => {
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        if (newText === "") {
            props.showAlert("Sorry, Please write something", "warning");
        } else {
            props.showAlert("Converted to UpperCase!", "success");
        }
    };
    const convertLowerCase = () => {
        // console.log("Lower case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        if (newText === "") {
            props.showAlert("Sorry, Please write something", "warning");
        } else {
            props.showAlert("Converted to LowereCase!", "success");
        }
    };
    const clear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been removed!", "success");
    };
    const copy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    };
    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    };
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };

    return (
        <>
            <div
                className="contsiner"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        onChange={handleOnChange}
                        value={text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={8}
                        style={{
                            backgroundColor: props.mode === "dark" ? "black" : "white",
                            color: props.mode === "dark" ? "white" : "black",
                        }}
                    />
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={convertUpperCase}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={convertLowerCase}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clear}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={copy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={removeExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "black" }}
            >
                <h1>Text Summary</h1>
                <p>
                    {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} cahracters
                </p>
                <p>
                    {0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read
                </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    );
}
