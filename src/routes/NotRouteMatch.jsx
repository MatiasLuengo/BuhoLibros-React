import { ErrorMsj } from "../components/ErrorMsj";

export const NotRouteMatch = ({  }) => {
    return (
        <section className="NotRouteMatch">
            <ErrorMsj msj={"Parece que esta página no existe"}></ErrorMsj>
        </section>
    )
};