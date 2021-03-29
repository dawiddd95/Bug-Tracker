import React from 'react';
import styled from 'styled-components';
// W hooku formika używamy już tylko useFormik
import { useFormik } from 'formik';
import StorePageTemplate from 'templates/StorePageTemplate';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';
import { Strong } from 'components/atoms/Strong/Strong';

const Wrapper = styled.div`
  width: 80%;
  margin: 40px auto;
  padding: 60px 40px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  /* Zwracać uwagę, żeby kolory dawać z theme, ja tutaj nie daję by było szybciej */
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// WSZYSTKIE STYLE POWINNY BYĆ NORMALNIE W ODDZIELNYCH KATALOGACH WIDOKÓW
// w hooku formika to już nie Form komponent formika tylko form jako tag HTML form
const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin: 20px 0;
  background-color: white;
`;

const StyledButton = styled(Button)`
  margin: 20px 0 0 0;
  width: 50%;
`;

const LoginPage = () => {
  // useState WSZYSTKIE STANY JEŚLI POTRZEBNE
  // moglibyśmy tutaj też zdefiniować funkcję, zamiast pisać na żywca wszystko w ciele onSubmit={}

  // Formik w hookach
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // Tutaj logika do fetcha
      // axios.post, zmiany stanów etc.
      return values;
    },
  });

  return (
    <StorePageTemplate>
      <Wrapper>
        <Strong large>Log in to your account</Strong>
        {/* Jest to <Form> tylko, że wsytylowane pod nasze potrzeby */}
        <StyledForm onSubmit={formik.handleSubmit}>
          {/* Jeśli mamy swoje inputy to nie musimy wstawiać Field */}
          <StyledInput
            type="text"
            // name musi być taki sam jak nazwa pola z initialValues
            name="email"
            placeholder="Your email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            width="50%"
          />
          <StyledInput
            type="password"
            // name musi być taki sam jak nazwa pola z initialValues
            name="password"
            placeholder="Your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            width="50%"
          />
          {/* Do atomów możemy sobie propsy dopisywać swobodnie */}
          <StyledButton
            type="submit"
            // Propsy SC, które uwzględniłem w stylach atomu
            uppercase
          >
            Log in
          </StyledButton>
        </StyledForm>
      </Wrapper>
    </StorePageTemplate>
  );
};

export default LoginPage;
