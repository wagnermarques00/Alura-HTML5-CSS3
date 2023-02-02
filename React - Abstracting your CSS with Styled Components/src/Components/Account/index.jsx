import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

const Account = () => {
	const [toggleState, untoggle] = useState(true);

	const toggleHandler = () => {
		untoggle((toggleState) => !toggleState);
	};

	return (
		<div className="box">
			<h2>Conta</h2>
			<div style={{ fontSize: "26px", padding: "20px 0" }}>
				Saldo disponível{" "}
				<span>
					<img className="image-icon" src={dinheiro} alt="Ícone Saldo" />
				</span>
				{toggleState ? (
					<div className="balance">
						<span className="detail">R$</span> 0,00{" "}
					</div>
				) : null}
			</div>

			<button className="btn" onClick={toggleHandler}>
				<img
					style={{ marginTop: "2px" }}
					className="image-icon"
					src={toggleState ? privado : olho_icone}
					alt="Privacidade do Saldo"
				/>
			</button>
		</div>
	);
};

export default Account;
