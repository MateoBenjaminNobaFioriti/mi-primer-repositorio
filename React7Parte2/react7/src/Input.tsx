import './input.css';

interface InputProps {
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export function InputBuscar(props: InputProps){
    return(
        <div>
            <div className="">
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