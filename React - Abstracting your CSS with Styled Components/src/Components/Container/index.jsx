import React from "react";
import styled from "styled-components";

import Title from "../Title";
import Account from "../Account";

const ContainerWrapper = styled.div`
	background-color: #f1f1f1;
	min-height: 90vh;
	padding: 0 15vw;
`;

const Content = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

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
			</Content>
		</ContainerWrapper>
	);
};

export default Container;
