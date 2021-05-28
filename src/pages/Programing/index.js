import Playlist from "../../components/Playlist";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Creators as actions } from "../../store/reducers/programing";
import { generateItems } from "../../utils";

const genItems = () => {
	return generateItems(10, (i) => ({
		id: i,
		type: "music",
		artist: `Artista ${i}`,
		title: `Nome de uma música qualquer ${Math.random()}`,
		category: "Sertanejo",
		duration: "03:20",
	}));
};

const itemsForHourly = {
	"00": genItems(),
	"01": genItems(),
	"02": [], //genItems(),
	"03": [], //genItems(),
	"04": genItems(),
	"05": genItems(),
	"06": genItems(),
	"07": genItems(),
	"08": genItems(),
	"09": genItems(),
	10: genItems(),
	11: genItems(),
	12: genItems(),
	13: genItems(),
	14: genItems(),
	15: genItems(),
	16: genItems(),
	17: genItems(),
	18: genItems(),
	19: genItems(),
	20: genItems(),
	21: genItems(),
	22: genItems(),
	23: genItems(),
};

function Programing() {
	const dispatch = useDispatch();

	const handleGetItems = () => {
		console.log("BUSCANDO NO BANCO.....");
		dispatch(actions.loadItems(itemsForHourly));
	};

	useEffect(() => {
		handleGetItems();
	});

	return <Playlist />;
}

export default Programing;
