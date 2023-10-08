import React from 'react'

export default function Upcoming() {
  return (
    <>
      <h1 className='text-center'>Dashboard</h1>
      <div className="container">
        <div className="row">
          {/* <div className="col-3 d-flex flex-wrap"> */}
            <div className="col-3 m-2 record border border-1  text-white d-flex flex-column justify-content-center p-4">
              <h4 className=''>Studnets</h4>
              <h2  className='r'>100</h2>
            </div>
            <div className="col-3 m-2 record border border-1 text-white  d-flex flex-column justify-content-center  p-4">
              <h4 className=''>Courses</h4>
              <h2  className=''>8</h2>
            </div>
            <div className="col-3 m-2 record border border-1 d-flex flex-column justify-content-center text-white p-4">
              <h4 className=''>Attandance</h4>
              <h2  className=''>20%</h2>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}
