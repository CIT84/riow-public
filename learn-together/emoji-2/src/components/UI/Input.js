import React from 'react'

const Input = (props) => {
    return (
        <div>
            <div className="formItems">
                    <label className="scissors formLabel">{props.labTxt}</label>
                    <input
                        onInput={props.handleInput}
                        name={props.nameTxt}
                        type={props.inputType}
                        placeholder={props.placeHoldTxt}
                        className="formInput"
                        required />
                </div>

        </div>
    )
}

export default Input
