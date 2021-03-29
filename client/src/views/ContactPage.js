import React from 'react';
import styled from 'styled-components';
import StorePageTemplate from 'templates/StorePageTemplate';
import { Strong } from 'components/atoms/Strong/Strong';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

const Wrapper = styled.div`
  width: 80%;
  margin: 60px auto;
  padding: 0 0 30px 0;
  background-color: #e6e6e6;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Dodatkowe style dla komponentu Strong
const StyledStrong = styled(Strong)`
  padding: 40px 0;
`;

// Dodatkowe style do Paragraph
const StyledParagraph = styled(Paragraph)`
  width: 60%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

const ContactPage = () => {
  return (
    <StorePageTemplate>
      {/* Ten kwadrat szary */}
      <Wrapper>
        <StyledStrong large>We are here to help!</StyledStrong>
        <StyledParagraph>
          The TRUE customer care team is available Monday - Friday from 7am - 7pm UTC +7. Saturday &
          Sunday we are definitely on the links but we will answer all inquiries as soon as we are
          back in the office on the next business day..
        </StyledParagraph>
        <StyledParagraph>
          We will do our best to respond as soon as possible; typical response time is within 24
          hours.
        </StyledParagraph>
        <StyledParagraph>
          Please check out our FAQ for quick insights on sizing, features and model comparisons
        </StyledParagraph>
        <StyledParagraph>Need an exchange/return? Submit your request here.</StyledParagraph>
        <StyledParagraph>
          Thank you and we look forward to connecting with you soon!
        </StyledParagraph>
      </Wrapper>
    </StorePageTemplate>
  );
};

export default ContactPage;
