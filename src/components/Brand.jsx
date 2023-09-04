import { Link } from "react-router-dom";
import imgLogo from "../assets/logo.png";

export const Brand = ({ title }) => {
    return (
        <Link className="brand" to={`/`} onClick={topFunction}>
            <img className="brandLogo" src={imgLogo} alt="Logo de buho"></img>
            {/* <div className="brandLogo"></div> */}
            {title && 
            <h1 className="brandTittle">{title}</h1>
            }
        </Link>
    );
};