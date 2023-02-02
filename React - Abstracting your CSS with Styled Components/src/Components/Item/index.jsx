import React from "react";
import styled from "styled-components";

const Item = styled.div`
	display: flex;
	flex-direction: column;

	.subtitle {
		font-weight: bold;
	}
`;

export default ({ from, type, value }) => {
	return (
		<Item>
			<span className="subtitle">{type}</span>
			<span>{from}</span>
			<span>{value}</span>
		</Item>
	);
};
