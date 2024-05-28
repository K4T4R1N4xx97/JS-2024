import StiliziranaKartica from "./StiliziranaKartica";
import { useContext } from "react";
import Context from "../../context/Context";

const ListaKartica = () => {
    const { kartica } = useContext(Context);

    if (!kartica || kartica.lenght === 0){
        return <p>Nema Sadrzaja</p>;
    }
    return (
        <div className="lista-kartica">
            {kartica.map((item) => (
                <StiliziranaKartica item={item} key={item.id} />
            ))}
        </div>
    );
};

export default ListaKartica;

