// import React from 'react';
// import PropTypes from 'prop-types';
// // Importujemy wszystkie komponenty, które mają być w ramach tego templateu
// import Header from 'components/organisms/Header/Header';
// import Navbar from 'components/molecules/Navbar/Navbar';
// import Footer from 'components/organisms/Footer/Footer';

// const StorePageTemplate = ({ children }) => {
//   return (
//     // Dodajemy komponenty, które mają być częścią tego templateu oraz, które mają być częścią każdego widoku oplecionego w ten template
//     <>
//       <Header />
//       <Navbar />
//       {/* W tym miejscu ma być zawartość naszego widoku */}
//       {children}
//       <Footer />
//     </>
//   );
// };

// StorePageTemplate.propTypes = {
//   // Jeśli są błędy z tym, że jest Rquired to usunąć isRequired bo ja sam sobie to dopisałem
//   // Jeszcze lepiej dla children możemy podać oba typy jeden z dwóch node lub element
//   children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
// };

// export default StorePageTemplate;
