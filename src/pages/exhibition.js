import List from '@/component/list';
import useStore from '@/state/store';
import React, { useEffect, useState } from 'react';
import Menu from './menu';
import Pagination from "react-js-pagination";

const Exhibition = () => {
  const { dataSave, data } = useStore();
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 20; // 한 페이지에 표시할 항목 수
  const exhibitions = data?.exhibition || [];

  const sortedExhibitions = exhibitions.sort((a, b) => new Date(a.DP_START) - new Date(b.DP_START)).reverse();

  // 페이지네이션 처리
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // 현재 페이지에 해당하는 데이터만 가져오기 (안전성 추가)
  const currentItems = sortedExhibitions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber); // 현재 페이지 업데이트
  }

  return (
    <div className='art'>
        <div className='exhibition'>
            <h2>전시</h2>
            <List 
              data={currentItems} // 현재 페이지에 해당하는 데이터만 전달
              id='DP_EX_NO' pname='DP_ARTIST' img='DP_MAIN_IMG' name='DP_NAME' place='DP_PLACE' info='DP_INFO' start='DP_START' end='DP_END' wave='&#126;' />
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={exhibitions.length}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange} // 페이지 변경 핸들러
            />
        </div>
    </div>
  )
}

export default Exhibition