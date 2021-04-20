import React, { useState  } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'context';
import { ThemeProvider } from 'styled-components';
// import { defaultTheme, cyanTheme, geekBlueTheme, goldTheme, limeTheme, redTheme, volcanoTheme, magentaTheme } from 'theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';
import { defaultTheme } from 'theme/mainTheme';

const MainTemplate = ({ children }) => {
	// const [theme2, setTheme2] = useState(defaultTheme)
	// const {theme, changeTheme} = useContext(ThemeContext)
	const [theme, changeTheme] = useState(defaultTheme)


	console.log(theme)

	// const change = (value) => {
				
	// 	setTheme2(theme2)
	// 	setContext(cyanTheme)
	// }

	return (
		<ThemeContext.Provider value={{theme, changeTheme}}>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				{children}
				{/* <button type="button" onClick={() => changeTheme(defaultTheme)}>default theme</button>
				<button type="button" onClick={() => changeTheme(cyanTheme)}>cyan theme</button>
				<button type="button" onClick={() => changeTheme(geekBlueTheme)}>geek theme</button>
				<button type="button" onClick={() => changeTheme(limeTheme)}>lime theme</button>
				<button type="button" onClick={() => changeTheme(redTheme)}>red theme</button>
				<button type="button" onClick={() => changeTheme(volcanoTheme)}>volcano theme</button>
				<button type="button" onClick={() => changeTheme(magentaTheme)}>magenta theme</button>
				<button type="button" onClick={() => changeTheme(goldTheme)}>gold theme</button> */}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};

MainTemplate.propTypes = {
	children: PropTypes.element.isRequired,
};

export default MainTemplate;
