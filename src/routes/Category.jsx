import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";

export const Category = ({  }) => {

    const {title} = useParams();
    
    return (
        <>
            <ItemListContainer getMethod={"getCategoryBooks"} category={title}/>
        </>
    )
};