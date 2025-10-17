import './InputField.css';


interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export function InputField(props: InputFieldProps){
    return(
        <div>
            <div className="inputField">
                <label className='labelizquierda'><b>{props.label}</b></label>
                <br></br>
                <input 
                    type={props.type} 
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    );
}