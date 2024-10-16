import useStore from '@/state/store';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const Search = ({onSearch}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    // onSearch가 함수인지 확인
    if (typeof onSearch === 'function') {
      // 검색어가 비어있지 않을 때만 검색 실행
      if (query.trim()) {
        onSearch(query);  // 검색어를 onSearch 함수로 전달
      } else {
        alert("검색어를 입력해 주세요.");
      }
    } else {
      console.error("onSearch는 함수가 아닙니다.");
    }
  };

  const {dataSave,data} = useStore()
  const ex = data.exhibition.filter((title) => title.DP_NAME.includes(query));
  const ed = data.education.filter((title) => title.EDU_NAME.includes(query));
  const co = data.collection.filter((title) => title.prdct_nm_korean.includes(query));
  
  // console.log(data);
  // console.log(ex, ed, co);

  const searchResults = [...ex, ...ed, ...co];
  console.log(searchResults);

  React.useEffect(() => {
    setResults(searchResults);
  }, [query, data]);

  let navigator = useRouter();
  
  return (
    <div className='art'>
      <div className="search">
        <form onSubmit={handleSearch}>
          <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색어를 입력해 주세요."/>
          <button type='submit'><img src='./search.svg' alt='Search'/></button>
        </form>
        {query.trim() && ( // 검색어가 있을 때만 결과 표시
          <ul>
            {results.length > 0 ? (
              results.map((result, index) => {
                let id = result.DP_EX_NO || result.ACADMY_NO || result.prdct_nm_korean;

                return <li key={index} onClick={()=>navigator.push(`/content?id=${id}`)}>
                  {/* {result.DP_MAIN_IMG || result.EDU_IMG || result.main_image} */}
                  {result.DP_NAME || result.EDU_NAME || result.prdct_nm_korean}
                </li>
              })
            ) : (
              <li>검색 결과가 없습니다.</li>
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Search


// pages/index.js
// import useStore from "@/state/store";
// import { useState } from "react";

// const Search = ({ initialResults }) => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState(initialResults);

//   const handleSearch = async (e) => {
//     e.preventDefault();
    
//     // 클라이언트에서 검색 요청을 보냄
//     const res = await fetch(`/api/search?query=${query}`);
//     const data = await res.json();
    
//     // 검색 결과를 업데이트
//     setResults(data.results);
//   };

//   return (
//     <div>
//       <h1>Search Page</h1>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {results.map((result, index) => (
//           <li key={index}>{result.DP_NAME || result.EDU_NAME || result.prdct_nm_korean}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // 서버 사이드에서 검색어 없이 처음 데이터를 로드
// export async function getServerSideProps() {
//   const {dataSave,data} = useStore()
//   const ex = data.exhibition.filter((title) => title.DP_NAME.includes(''));
//   const ed = data.education.filter((title) => title.EDU_NAME.includes(''));
//   const co = data.collection.filter((title) => title.prdct_nm_korean.includes(''));

//   const search = [...ex, ...ed, ...co];
  
//   return {
//     props: {
//       initialResults: search,  // 초기 데이터
//     },
//   };
// }

// export default Search;
