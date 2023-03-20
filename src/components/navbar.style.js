import styled from "styled-components";
export const NavbarStyle = styled.nav`
	display: flex;
	justify-content: center;
	background-color: ${(props) => props.theme.colors.primary};
	height: 100px;
	align-items: center;
	text-align: center;

	ul {
		display: flex;
		margin: 0;
		padding: 0;
		align-items: center;
		justify-content: space-between;
		gap: 15px;
	}

	li {
		list-style: none;
	}

	h1 {
		margin: 4%;
	}
`;
