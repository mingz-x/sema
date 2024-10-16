import useStore from '@/state/store'
import React from 'react'

const Scrap = ({img}) => {
  const {dataSave,data} = useStore()
  // const a = [ex, ed, co]
  //   let ex = data?.exhibition
  //   let ed = data?.education
  //   let co = data?.collection
  //   console.log(ex, ed, co);
  return (
    <div className='art'>
        <div className='scrap'>
          <h2>SCRAP</h2>
          <div>
            <figure><img/></figure>
          </div>
        </div>
    </div>
  )
}

export default Scrap