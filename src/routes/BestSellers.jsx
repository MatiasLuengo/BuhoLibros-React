import { ItemListContainer } from "../components/ItemListContainer";
export const BestSellers = ({  }) => {
    return (
        <>
            <ItemListContainer getMethod={"getBestSellersBooks"}/>
        </>
    )
};