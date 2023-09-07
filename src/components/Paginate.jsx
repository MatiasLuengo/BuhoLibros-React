import ReactPaginate from 'react-paginate';
import React, { useEffect, useState} from "react";
import { ItemList } from "./ItemList";

export const Paginate = ({ products, itemsPerPage, filteredProducts, searchTerm }) => {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    
    useEffect(() => {
        setCurrentItems([]);
        let totalProducts = searchTerm === "" ? products : filteredProducts;
    
        const newPageCount = Math.ceil(totalProducts.length / itemsPerPage);
        setPageCount(newPageCount);
    
        if (currentPage >= newPageCount) {
        setCurrentPage(0);
        }

        const startOffset = currentPage * itemsPerPage;
        const endOffset = startOffset + itemsPerPage;
        const slicedProducts = totalProducts.slice(startOffset, endOffset);
        setCurrentItems(slicedProducts);
    }, [currentPage, itemsPerPage, products, filteredProducts, searchTerm]);
    
    const handlePageClick = (event) => {
        const selectedPage = event.selected;
        setCurrentPage(selectedPage);
    };
    
    useEffect(() => {
        setCurrentPage(0);
    }, [searchTerm]);

    return (
    <>
        <ItemList currentProducts={currentItems}></ItemList>
        <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        nextLabel=">"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="paginationContainer"
        activeClassName="paginationActive"
        forcePage={currentPage}
        renderOnZeroPageCount={null}
        />
    </>
    );
}