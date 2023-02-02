import styled from "styled-components";

export const Icon = styled.img`
	height: 25px;
	width: 25px;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: white;
	border-radius: 5px;
	box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
	padding: 20px;
	width: 48%;

	@media (max-width: 800px) {
		width: 95%;
		margin: 5px;
	}
`;

export const Button = styled.button`
	display: block;

	background-color: #41d3be;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	margin: 15px auto 0 auto;
	padding: 8px 20px;

	color: white;
	font-size: 14px;
	font-weight: 600;
`;

export const Detail = styled.span`
	color: #41d3be;
	font-size: 24px;
`;

export const Balance = styled.div`
	font-size: 32px;
	font-weight: 700;
`;
