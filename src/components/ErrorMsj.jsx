export const ErrorMsj = ({msj}) => {
    return(
        <div className="productEmpty">
                <img className="imgProductEmpty" src="../src/assets/glass.png" alt="Ruta no reconocida" />
                <p>{msj}</p>
        </div>
    )
}