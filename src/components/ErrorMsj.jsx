import imgGlass from "../assets/glass.png";
export const ErrorMsj = ({msj}) => {
    return(
        <div className="productEmpty">
                <img className="imgProductEmpty" src={imgGlass} alt="Ruta no reconocida" />
                <p>{msj}</p>
        </div>
    )
}