import React, { useState  } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'context';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { defaultTheme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => {
	const [theme, changeTheme] = useState(defaultTheme)

	return (
		<ThemeContext.Provider value={{theme, changeTheme}}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

MainTemplate.propTypes = {
	children: PropTypes.element.isRequired,
};

export default MainTemplate;
