import React from "react";
import styled from "styled-components";

import Item from "../Item";
import ImageFilter from "../ImageFilter";

const Items = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;

	border-radius: 10px;
	box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
	margin: 2px;
	padding: 10px;

	font-size: 12px;
`;

export default (props) => {
	return (
		<Items>
			{ImageFilter(props.type)}
			<Item {...props} />
			<span>{props.date}</span>
		</Items>
	);
};
