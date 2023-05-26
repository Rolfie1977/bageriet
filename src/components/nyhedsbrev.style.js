import Breadpic from "../assets/images/images/newsletterbg.jpg";
import styled from "styled-components";

export const Nyhedsbrevstyle = styled.div`
	background-image: url(${Breadpic});

	height: 450px;
	width: 100%;

	background-position: center;

	text-align: center;

	h4 {
		color: white;
	}

	input {
		width: 1000px;
	}

	form {
		display: flex;
		justify-content: center;
	}

	button {
		color: white;
		background-color: ${(props) => props.theme.colors.primary};
	}
`;
