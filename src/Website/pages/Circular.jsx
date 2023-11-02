import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Circular = () => {
  return (
    <div>  <div className="card skeleton">
    <Skeleton style={{ height: "80px", width: "80px", borderRadius: "50%", marginLeft: "10px", paddingTop: "28px" }} />
</div></div>
  )
}

export default Circular