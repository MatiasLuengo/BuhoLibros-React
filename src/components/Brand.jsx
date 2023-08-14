import { Link } from "react-router-dom";

export const Brand = ({ titulo }) => {
    return (
        <Link className="brand" to={`/`}>
            {/* <img className="brandLogo" src="./src/assets/logo.png" alt="Logo de buho"></img> */}
            <div className="brandLogo"></div>
            <h1 className="brandTittle">{titulo}</h1>
        </Link>
    );
};