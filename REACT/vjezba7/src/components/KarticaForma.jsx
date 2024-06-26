import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react";
import Context from "../../context/Context";
import Button from "../shared/Button";
import Rating from "./Rating";

const KarticaForma = () => {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [poruka, setPoruka] = useState("");
    const [rating, setRating] = useState(5);

    const { handleFeedback, editKartica, updateFeedback } = useContext(Context);

    useEffect(() => {
        if(editKartica.edit === true){
            setText(editKartica.kartica.text);
            setRating(editKartica.kartica.ratina);
            setBtnDisabled(false);
        }
    }, [editKartica]);

    const handleChange = (event) => {
        const provjera = event.target.value;
        setText(provjera);

        if (provjera === ""){
            setBtnDisabled(true);
            setPoruka(null);
        } else if (provjera.trim().length < 6){
            setPoruka("Mora biti barem 6 slova");
            setBtnDisabled(true);
        } else {
            setPoruka(null);
            setBtnDisabled(false);
        }        
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const noviUnos = {
            text,
            rating,
        };
        if (editKartica.edit === true) {
            updateFeedback(editKartica.kartica.id, noviUnos);
        } else {
            handleFeedback(noviUnos);
        }
        
        setText("");
    };

  return (
  <Card>
    <form className="input-forma" onSubmit={handleSubmit}>
        <p>Molimo unesite vasu recenziju:</p>
        <Rating odabran={(rating) => setRating(rating)} />
        <div className="input-grupa">
            <input type="text" placeholder="Unesite tekst" onChange={handleChange} value={text} />
            <Button type="submit" version="secondary" isDisabled={btnDisabled}>
                Posalji
            </Button>
        </div>
        {poruka && <div className="poruka">{poruka}</div>}
    </form>
  </Card>
  );
};

export default KarticaForma;