import React from 'react'
import Skeleton from 'react-loading-skeleton'

const SquareSkeleton = () => {
    return (
        <div>
            <div>
                <div className="card skeleton">
                    <Skeleton style={{ height: "300px", width: "300px", marginBottom: "10px" }} />
                </div>
            </div>
        </div>
    )
}

export default SquareSkeleton
