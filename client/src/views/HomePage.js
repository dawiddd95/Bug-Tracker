import React from 'react';
import styled from 'styled-components';
import StorePageTemplate from 'templates/StorePageTemplate';
import { productsApi } from 'utils/api';
import item1 from 'assets/img/item-1.png';
import item2 from 'assets/img/item-2.png';
import Section from 'components/molecules/Section/Section';
import { OfferAdvertise } from 'components/atoms/OfferAdvertise/OfferAdvertise';

// Widoki powinne być w osobnych katalogach, ale już mi się nie chce tego robić
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageContentWrapper = styled.div`
  width: 100%;
  padding: 40px 0;
`;

// Nadamy dodatkowe atrybuty dla komponentu Section, dzięki temu nie musimy go w nic wrappować, wrappowanie takie wreszcie zmniejszyło by czytelność
const StyledSection = styled(Section)`
  margin: 20px 0;
  border: 4px solid red;
`;

const SectionChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    // Dzięki temu kązdy element w tym komponencie będzie w kolumnie
    // Wrapper dla całej strony wraz z header etc...
    <StyledWrapper>
      {/* Użycie naszego templateu */}
      <StorePageTemplate>
        {/* Wrapper dla childrena widoku */}
        <PageContentWrapper>
          <StyledSection api={productsApi} />

          <StyledSection api={productsApi}>
            {/* Wrapper dla childrena komponentu Section */}
            <SectionChildrenWrapper>
              {/* To jest children */}
              <OfferAdvertise src={item1} width="50%" />
              <OfferAdvertise src={item2} width="50%" />
            </SectionChildrenWrapper>
          </StyledSection>
        </PageContentWrapper>
      </StorePageTemplate>
    </StyledWrapper>
  );
};

export default HomePage;
