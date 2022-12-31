import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name,width,...otherProps}) {
    const {setFieldTouched,setFieldValue, errors,touched,values }= useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={text => setFieldValue(name,text)}
                value={values[name]}
                onBlur={()=> setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
            
        </>
    );
}

export default AppFormField;