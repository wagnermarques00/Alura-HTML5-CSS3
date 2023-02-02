import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { primaryColor } from "../UI/variables";

const StyledHeader = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: ${primaryColor};
	height: 10vh;
	padding: 0 15vw;
`;

const Logo = styled.img`
	height: 50px;
	width: 50px;
`;

const BtnHeader = styled.a`
	text-align: center;
	border-radius: 3px;
	padding: 5px 20px;
	margin: 0 10px;
	font-weight: 600;
	border: 2px solid white;

	background: ${(props) => (props.primary ? "white" : primaryColor)};
	color: ${(props) => (props.primary ? primaryColor : "white")};
`;

const Header = () => {
	return (
		<StyledHeader>
			<Logo src={bank_logo} alt="Logo Smart Bank" />
			<div>
				<BtnHeader primary href="https://google.com">
					Ajuda
				</BtnHeader>
				<BtnHeader href="https://google.com">Sair</BtnHeader>
			</div>
		</StyledHeader>
	);
};

export default Header;
