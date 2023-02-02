import React from "react";
import styled from "styled-components";

import { Box, Button } from "../UI/";
import { extractList } from "../../info";
import Items from "../Items";

const Extract = () => {
	return (
		<Box>
			{extractList.updates.map(({ id, type, from, value, date }) => {
				return <Items key={id} type={type} from={from} value={value} date={date} />;
			})}
			<Button>Ver Mais</Button>
		</Box>
	);
};

export default Extract;
