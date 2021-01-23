import './form-input.scss';


const FormInput = ({label,changeHandler, ...otherProps})=>{
    return (
        <div className="group">
            <input onChange={changeHandler} {...otherProps} className="form-input"/>
            {
                label?
                (<label className={`${otherProps.value.length?'shrink':''} form-input-label`}> {label} </label> )
                :
                null
            }
        </div>
    )
}

export default FormInput;