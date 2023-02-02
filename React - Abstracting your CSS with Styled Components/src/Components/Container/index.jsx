import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Account from "../Account";
import Extract from "../Extract";

const ContainerWrapper = styled.div`
	background-color: ${({ theme }) => theme.body};
	min-height: 90vh;
	padding: 0 15vw;
`;

const Content = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	color: ${({ theme }) => theme.text};

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

const Container = () => {
	return (
		<ContainerWrapper>
			<Title>Olá Fulano!</Title>
			<Content>
				<Account />
				<Extract />
			</Content>
		</ContainerWrapper>
	);
};

export default Container;
