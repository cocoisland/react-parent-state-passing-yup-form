import React, {useState} from 'react';
import * as yup from 'yup';
import Button from '@material-ui/core/Button'

const formSchema = yup.object().shape({
    name: yup.string()
        .required('Name required'),
    email: yup.string()
        .email('Must have valid email format abc@edf.com')
        .required('Email required'),
    role: yup.string('')
        .required('Role required'),
})

const MemberForm = (props) => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    });

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        role: "",
    });

    const [isDirty, setIsDirty] = useState({
        name: false,
        email: false,
        role: false
    });

    const errorCheck = (
        errorState.name !== '' ||
        errorState.email !== '' ||
        !!errorState.role       //single ! - not empty; double !! - not not empty=empty
    )
    const isDirtyCheck = (
        isDirty.name &&
        isDirty.email &&
        isDirty.role 
    )

    //console.log('isDirtyCheck', isDirtyCheck)
    const submitIsDisabled = errorCheck || !isDirtyCheck;
    

    const editIsDisabled = props.appMember.name === '';

    const validate = (e) => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then( valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ''
                })
            })
            .catch( err => {
                //console.log('here err', err.errors[0])
                setErrorState({
                    ...errorState, [e.target.name]: err.errors[0]
                })
            })
    };

    const inputChange = (e) => {
        setIsDirty({...isDirty, [e.target.name]: true})
        //props.updateMember(e.target)
        setMember({
            ...member,
            // square bracket "[]" -> key of key-value pair
            [e.target.name] : e.target.value
        });
    } 

    const blurHandler = (e) => {
// React asynchronously discarded event quickly after executing to improve performance. 
// event.persist prevent event from discarding before validate(event) finished
        e.persist();
//debugger // DOM->inspect->source->watch when typing into the field
        validate(e)
    }

    const formSubmit = (e) =>{
        e.preventDefault()     
        // addMember from Apps.js
        var f= props.appFunc()
        f.addMemberToList(member)
        //props.addMemberToList(member);
        // reset the form field to new clear upon button submit
        resetHandler(e)
    }

    const resetHandler = (e) => {
        e.preventDefault()
        setMember({name:'', email:'', role:''})
        setErrorState({name:'', email:'', role:''})
        setIsDirty(false)
    }

    const editHandler = (e) => {
        e.preventDefault()
        setMember(props.appMember)
        //props.resetAppMember()
        var f=props.appFunc()
        f.resetAppMember()
    }
    
    return ( 
        // Regular form action vs React form onSubmit
        <form onSubmit={formSubmit} >
 
{/* Regular label for vs React label htmlFor */}
{/* htmlFor linking label-input id for accessibility */}
        <label htmlFor='name'>Name : 
        <input 
            autoComplete="off"
            id='name'
            name='name'
            type='text'
            placeholder='Please Enter Your Name...'
            value={member.name}
            onBlur={ blurHandler }
            onChange={ inputChange }
        />
        {errorState.name.length > 0 ? <span className='errMsg'>{errorState.name}</span> 
            : null}
        </label>
        <p></p>
        <label htmlFor='email'>Email : 
        <input
            autoComplete='off'
            id='email'
            name='email'
            type='text'
            placeholder='Email...'
            value={member.email}
            onBlur={ blurHandler }
            onChange={ inputChange }
        />
        {errorState.email.length > 0 ? <p className='errMsg'>{errorState.email}</p> 
            : null}
        </label>
        <p></p>
        <label htmlFor='role'>Role :
        <input
            id='role'
            name='role'
            type='text'
            placeholder='Role...'
            value={member.role}
            onBlur={ blurHandler }
            onChange={ inputChange }
        />
        {errorState.role.length > 0 ? <span className='errMsg'>{errorState.role}</span>
            : null}
        </label>
<p></p>
        <Button variant='contained' color='primary'
        disabled={submitIsDisabled} type='submit'>Submit</Button>

        <Button onClick={resetHandler} >Reset</Button>
        <Button disabled={editIsDisabled} color='secondary'
             onClick={editHandler }>Edit</Button>
        
        </form>

        
    )
}

export default MemberForm;