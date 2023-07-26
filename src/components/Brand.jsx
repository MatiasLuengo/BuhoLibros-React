export const Brand = ({ titulo }) => {
    return (
        <a className="brand" href="#">
            <img className="brandLogo" src="./src/assets/logo.png" alt="Logo de buho"></img>
            <h1 className="brandTittle">{titulo}</h1>
        </a>
    );
};