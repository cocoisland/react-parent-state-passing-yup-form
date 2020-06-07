import React from 'react';
import {Formik, Form, Field} from 'formik';

const LoginPage = () => {

    //formik handlesubmit perform preventDefault
    const handleSubmit = (values) => {

    }

    return (
        <div className='LoginPage'>
            <Formik 
                initialValues={{email:'', password:''}}
                onSubmit={handleSubmit} 
            >
            { (props) => (
                <Form>
                    <div>
                        <label htmlFor='email'>Email: </label>
                        {/* formik Field handle onChange */}
                        <Field autoComplete='off' name='email' />
                    </div>

                    <div>
                        <label htmlFor='email'>Password: </label>
                        <Field autoComplete='off' name='password' />
                    </div>
                    <button type='submit'>Submit</button>
                    <button type='button'>Reset</button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default LoginPage;