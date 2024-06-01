import { useState } from "react"

export const useLogin = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const {username, email, password} = formState;
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        if (value.length <= 30) {
            setFormState({
                ...formState,
                [name]: value,

            });
        }
    }

    const onResetForm = () => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        setFormState(initialForm);
    }


    return {
        ...formState,
        formState,
        onResetForm,
        onInputChange,
    }

}

export default useLogin
