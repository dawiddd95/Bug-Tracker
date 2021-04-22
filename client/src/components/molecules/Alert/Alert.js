import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import errorIcon from 'assets/icons/error.svg';
import successIcon from 'assets/icons/success.svg';
import { Span } from 'components/atoms/Span/Span';
import * as S from './StyledAlert';

const Alert = ({ type, txt }) => {
	return (
		<Fade right>
			<S.Wrapper>
				<S.Img src={type === 'error' ? errorIcon : successIcon} />
				<Span>{txt}</Span>
			</S.Wrapper>
		</Fade>
	);
};

Alert.propTypes = {
	type: PropTypes.string.isRequired,
	txt: PropTypes.string.isRequired,
};

export default Alert;
