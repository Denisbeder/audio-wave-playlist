import "./styles.scss";
import {
	Alignment,
	Button,
	Navbar,
	Menu,
	MenuItem,
	MenuDivider,
	Position,
	Classes 
} from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { memo } from "react";
import { useHistory } from "react-router-dom";

function NavbarTop() {
	const history = useHistory();
	console.log('Render <NavbarTop />');
	return (
		<div className="navbar">
			<Navbar fixedToTop={true} className={Classes.DARK}>
				<Navbar.Group align={Alignment.LEFT}>
					<Navbar.Heading className="logo">
						<img src="/assets/img/logo192.png" alt="" />
						<span>Musical</span>
					</Navbar.Heading>

					<Popover2
						usePortal={false}
						popoverClassName="bp3-dark"
						content={
							<Menu>
								<MenuItem text="Música" />
								<MenuItem text="Vinhetas" />
								<MenuItem text="Hora Certa" />
								<MenuItem text="Blocos Gravados " />
							</Menu>
						}
						position={Position.BOTTOM_LEFT}
						minimal={true}
					>
						<Button minimal={true} text="Cadastrar" />
					</Popover2>

					<Popover2
						usePortal={false}
						popoverClassName="bp3-dark"
						content={
							<Menu>
								<MenuItem text="Música" />
								<MenuItem text="Vinhetas" />
								<MenuItem text="Hora Certa" />
								<MenuItem text="Blocos Gravados" />
							</Menu>
						}
						position={Position.BOTTOM_LEFT}
						minimal={true}
					>
						<Button minimal={true} text="Editar" />
					</Popover2>

					<Popover2
						usePortal={false}
						popoverClassName="bp3-dark"
						content={
							<Menu>
								<MenuItem onClick={() => history.push("/")} text="Visualizar" />
								<MenuItem onClick={() => history.push("/programing")} text="Editar" />
								<MenuItem text="Copiar" />
								<MenuItem text="Gerar automático" />
								<MenuDivider />
								<MenuItem text="Formatos" />
								<MenuItem text="Cabeçalhos" />
							</Menu>
						}
						position={Position.BOTTOM_LEFT}
						minimal={true}
					>
						<Button minimal={true} text="Programação" />
					</Popover2>

					<Button minimal={true} text="Relatórios" />
				</Navbar.Group>

				<Navbar.Group align={Alignment.RIGHT}>
					<Button minimal={true} icon="chevron-down" />
					<Button minimal={true} icon="minus" />
					<Button minimal={true} icon="square" />
					<Button minimal={true} icon="cross" />
				</Navbar.Group>
			</Navbar>
		</div>
	);
}

//export default NavbarTop;
export default memo(NavbarTop);
