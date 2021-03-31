// import React from 'react';
// import styled from 'styled-components';
// // W hooku formika używamy już tylko useFormik
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import StorePageTemplate from 'templates/StorePageTemplate';
// import { Button } from 'components/atoms/Button/Button';
// import { Input } from 'components/atoms/Input/Input';
// // import { Paragraph } from 'components/atoms/Span/Span';
// import { Strong } from 'components/atoms/Strong/Strong';

// const Wrapper = styled.div`
//   width: 80%;
//   margin: 40px auto;
//   padding: 60px 40px;
//   border: 1px solid #e6e6e6;
//   border-radius: 4px;
//   /* Zwracać uwagę, żeby kolory dawać z theme, ja tutaj nie daję by było szybciej */
//   background-color: #f5f5f5;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// // WSZYSTKIE STYLE POWINNY BYĆ NORMALNIE W ODDZIELNYCH KATALOGACH WIDOKÓW
// // w hooku formika to już nie Form komponent formika tylko form jako tag HTML form
// const StyledForm = styled.form`
//   width: 80%;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const StyledInput = styled(Input)`
//   margin: 20px 0;
//   background-color: white;
// `;

// // Dla wyglądu błędów formularzu
// const StyledParagraph = styled(Paragraph)`
//   margin: 0 auto;
//   font-family: 'segoe';
//   font-size: 14px;
//   color: red;
// `;

// const StyledButton = styled(Button)`
//   margin: 20px 0 0 0;
//   width: 50%;
// `;

// const RegisterPage = () => {
//   // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
//   // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}

//   // Formik w hookach
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     // Walidacja formika z Yup
//     validationSchema: Yup.object().shape({
//       email: Yup.string().email().required('Email is required'),
//       password: Yup.string()
//         .min(8, 'Minimum 8 characters')
//         .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
//         .matches(/^(?=.*[0-9])/, 'Must contain at least one numeric character')
//         .matches(/^(?=.*[!@#$%^&*()])/, 'Must contain at least one special character')
//         .required('Password is required'),
//       confirmPassword: Yup.string()
//         .required('Password must match')
//         .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//     }),
//     onSubmit: (values) => {
//       // Tutaj logika do fetcha
//       // axios.post, zmiany stanów etc.
//       return values;
//     },
//   });

//   return (
//     <StorePageTemplate>
//       <Wrapper>
//         <Strong large>Register your account</Strong>
//         {/* Jest to <Form> tylko, że wsytylowane pod nasze potrzeby */}
//         <StyledForm onSubmit={formik.handleSubmit}>
//           {/* Jeśli mamy swoje inputy to nie musimy wstawiać Field */}
//           <StyledInput
//             type="text"
//             // name musi być taki sam jak nazwa pola z initialValues
//             name="email"
//             placeholder="Your email address"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             width="50%"
//           />
//           {formik.errors.email && formik.touched.email && (
//             <StyledParagraph>{formik.errors.email}</StyledParagraph>
//           )}
//           <StyledInput
//             type="password"
//             // name musi być taki sam jak nazwa pola z initialValues
//             name="password"
//             placeholder="Your password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//             width="50%"
//           />
//           {formik.errors.password && formik.touched.password && (
//             <StyledParagraph>{formik.errors.password}</StyledParagraph>
//           )}
//           <StyledInput
//             type="password"
//             // name musi być taki sam jak nazwa pola z initialValues
//             name="confirmPassword"
//             placeholder="Repeat your password"
//             value={formik.values.confirmPassword}
//             onChange={formik.handleChange}
//             width="50%"
//           />
//           {formik.errors.confirmPassword && formik.touched.confirmPassword && (
//             <StyledParagraph>{formik.errors.confirmPassword}</StyledParagraph>
//           )}
//           {/* Do atomów możemy sobie propsy dopisywać swobodnie */}
//           <StyledButton
//             type="submit"
//             // Propsy SC, które uwzględniłem w stylach atomu
//             uppercase
//           >
//             register account
//           </StyledButton>
//         </StyledForm>
//       </Wrapper>
//     </StorePageTemplate>
//   );
// };

// export default RegisterPage;
