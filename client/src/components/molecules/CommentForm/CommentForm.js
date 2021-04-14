// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import { Input } from 'components/atoms/Input/Input';
// import * as Yup from 'yup';
// import Alert from '../Alert/Alert';
// import * as S from './StyledForgotPasswordForm';

// // TUTAJ ADRAZU NIECH DODAJE DO REDUXA, BO WSZYSTKIE ZMIANY PO DODANIU BĘDZIE BRAŁO Z REDUXA, BO STRONA SIE NIE PRZELADUJE PO DODANIU
// const CommentForm = ({}) => {
//     const [alert, setAlert] = useState(false);

//     return (
//         <>
//             {alert && <Alert type="error" txt="We are temporarily unable to perform this operation" />}
//             <Formik
//                 initialValues={{ 
//                     id: '',
//                     content: '',
//                     ticketId: '',
//                     authorId: '',
//                 }}
//                 onSubmit={() => {
//                     setAlert(true);
//                 }}
//                 validationSchema={Yup.object().shape({
//                     email: Yup
//                        .string()
//                        .email()
//                        .required('Email is required'),
//                 })}
//             >
//             {({ handleSubmit }) => (
//                 <S.StyledForm onSubmit={handleSubmit}>
//                     <Input
//                         type="text"
//                         name="email"
//                         placeholder="Email"
//                     />
//                     <S.FormError name="email" component="span" />
//                     <S.StyledButton 
//                         type="submit" 
//                         backround="white"
//                     >
//                         Send password reset email
//                     </S.StyledButton>
//                 </S.StyledForm>
//             )}
//             </Formik>
//         </>
//     );
// }
 
// export default ForgotPasswordForm;
