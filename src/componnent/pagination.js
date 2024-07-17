import  { React,useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductsList from './productsList';

function Pagination({items ,category}) {
    const itemsPerPage=6 ; 
    const [currentpage, setCurrentpage] = useState(1);
    const endIndex = currentpage * itemsPerPage;
    const startIndex= endIndex - itemsPerPage ;
    const currentItems = items.slice( startIndex ,endIndex);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick =(event)=>{
       setCurrentpage(event.selected + 1)
        }
return( <>
      <ProductsList currentItems={currentItems} />
            <ReactPaginate
            className='pag mt-4'
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
      </>)
     }
export default Pagination ;