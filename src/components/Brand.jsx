import { Link } from "react-router-dom";
import imgLogo from "../assets/logo.png";
import { topFunction } from "../scripts/back-to-top";

export const Brand = ({ title }) => {
    return (
        <Link className="brand" to={`/`} onClick={topFunction}>
            <img className="brandLogo" src={imgLogo} alt="Logo de buho"></img>
            {title && 
            <h1 className="brandTittle">{title}</h1>
            }
        </Link>
    );
};