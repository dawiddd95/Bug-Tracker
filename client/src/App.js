// import { Button } from 'components/atoms/Button/Button';
import React from 'react';
// import styled, { ThemeProvider } from 'styled-components';
// import { theme } from 'theme/mainTheme';
// import { BrowserRouter } from 'react-router-dom';
// import { productsApi } from 'utils/api';
// import { OfferAdvertise } from 'components/atoms/OfferAdvertise/OfferAdvertise';
// import item1 from 'assets/img/item-1.png';
// import item2 from 'assets/img/item-2.png';
// import Section from 'components/molecules/Section/Section';

// To dać do widoku głównego jak już będę robił na gotowe
// Nie chcemy, żeby Wrapper był ostylowany zawsze tak samo, bo childreny mogą być różne i wymagać różnego układu
// Więc nasz układ zdefiniujemy w stylach widoku tutaj. W tym przypadku oba obrazki mają być obok siebie
// const SectionChildrenWrapper = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

function App() {
  return (
    // <BrowserRouter>
    //   <ThemeProvider theme={theme}>
    //     <Button>smartphones</Button>

    //     {/* Uruchomi tylko regularny kod */}
    //     <Section api={productsApi} />

    //     {/* Urchumowi Regularny kod + children */}
    //     <Section api={productsApi}>
    //       <SectionChildrenWrapper>
    //         {/* To jest children */}
    //         <OfferAdvertise src={item1} width="50%" />
    //         <OfferAdvertise src={item2} width="50%" />
    //       </SectionChildrenWrapper>
    //     </Section>
    //   </ThemeProvider>
    // </BrowserRouter>
  );
}

export default App;
