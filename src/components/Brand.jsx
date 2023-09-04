import { Link } from "react-router-dom";

export const Brand = ({ titulo }) => {
    return (
        <Link className="brand" to={`/`} onClick={topFunction}>
            {/* <img className="brandLogo" src="./src/assets/logo.png" alt="Logo de buho"></img> */}
            <div className="brandLogo"></div>
            {titulo && 
            <h1 className="brandTittle">{titulo}</h1>
            }
        </Link>
    );
};