import List from '@/component/list'
import useStore from '@/state/store'
import React, { useState } from 'react'
import Pagination from "react-js-pagination";


const Education = () => {
    const {dataSave,data} = useStore()
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 20;
    const educations = data?.education || [];

    const sortedEducations = educations.sort((a, b) => new Date(a.APP_OPEN) - new Date(b.APP_OPEN)).reverse();
    // const start = [...data.education].sort((a,b) => new Date(a.APP_OPEN).getFullYear() - new Date(b.APP_OPEN).getFullYear()).reverse();

    // const sorted_list = list.sort(function(a, b) {
    //   return new Date(a.date).getTime() - new Date(b.date).getTime();
    // }).reverse();

    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = sortedEducations.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
      setActivePage(pageNumber); // 현재 페이지 업데이트
    }

  return (
    <div className='art'>
        <div className='education'>
            <h2>교육프로그램</h2>
            <List data={currentItems} id='ACADMY_NO' pname='TCHER_NAME' img='EDU_IMG' name='EDU_NAME' place='EDU_PLACE' info='EDU_CONTENT' start='APP_OPEN' end='APP_CLOSE' wave='&#126;' />
            <Pagination
              activePage={activePage}
              itemsCountPerPage={itemsPerPage}
              totalItemsCount={educations.length}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange} // 페이지 변경 핸들러
            />
        </div>
    </div>
  )
}

export default Education

