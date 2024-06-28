import StiliziranaKartica from "./StiliziranaKartica";
import { useContext } from "react";
import Context from "../../context/Context";
import Spinner from "../shared/spinner";

const ListaKartica = () => {
    const { kartica, isLoading } = useContext(Context);

    if (!isLoading && (!kartica || kartica.lenght === 0)){
        return <p>Nema Sadrzaja</p>;
    }
    return isLoading ? (
        <Spinner />
    ) : (
        <div className="lista-kartica">
            {kartica.map((item) => (
                <StiliziranaKartica item={item} key={item.id} />
            ))}
        </div>
    );
};

export default ListaKartica;

