import React, { useEffect } from 'react'
import './Pagination.css'
function Pagination(props) {
  return (
    <div className='pagination_div'>
        {
            props.page > 1 ? <button onClick={()=>{
                props.setPage(cur_page => {
                    return cur_page - 1
                })
            }}>Previous</button> : <></>
        }
        {
            props.pageQty != props.page ? <button onClick={()=>{
                props.setPage(cur_page => {
                    return cur_page + 1
                })
            }}>Next</button> : <></>
        }
    </div>
  )
}

export default Pagination;
