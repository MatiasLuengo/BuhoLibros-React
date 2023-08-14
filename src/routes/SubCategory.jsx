import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";

export const SubCategory = ({  }) => {

    const {category, subCategory} = useParams();

    return (
        <>
            <ItemListContainer getMethod={"getSubCategoryBooks"} category={category} subcategory={subCategory}/>
        </>
    )
};