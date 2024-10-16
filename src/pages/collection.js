import List from '@/component/list'
import useStore from '@/state/store'
import Link from 'next/link'
import React, { useState } from 'react'
import Pagination from "react-js-pagination";

const Collection = () => {
  const {dataSave,data} = useStore()
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 20;
  const collections = data?.collection || [];

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = collections.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber); // 현재 페이지 업데이트
  }

  return (
    <div className='art'>
        <div className='collection'>
            <h2>소장품</h2>
            <List data={currentItems} id='prdct_nm_korean' img='main_image' name='prdct_nm_korean' pname='writr_nm' info='prdct_cl_nm, matrl_technic' />
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={collections.length}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange} // 페이지 변경 핸들러
            />
        </div>
    </div>
  )
}

export default Collection