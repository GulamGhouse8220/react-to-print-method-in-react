import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import './delivery.css'

const DeliveryChallan = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (<>
    <div class="print__section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">

            <div ref={componentRef} className="card">
              <div class="float__start">
                <h3 class="card-title mb-0"></h3>
              </div>
              <hr />
              <div class="float__infoss">
                <div id='totalall'>
                  <div className='top1'>
                    <h5>GST NO: XXXXXXXXXXXXX</h5>
                    <div className='top2'>
                      <h2 className='titlestyle'>DELIVERY CHELLAN</h2>
                      <div className='top3'>For materials sent outside</div>
                    </div>
                  </div>
                  <br></br>
                  <div className='all'>
                    <h1 className='top11'>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h1>
                    <h6 className='top12'>"Krishna Sree", New No.44, Old No.8, 2 nd Kloor, First Main Road, Gandhi Nagar, Adyar, Chennai-600 020<br></br>
                      <b className='top13'>Ph: 044-4260 7521</b>
                    </h6>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='container'>
                      <h2 className='top4'>P.O. No...........................</h2>
                      <br></br>
                      <h2 className='top5'>S.No......................</h2>
                      <br></br>
                      <br></br>
                      <h2 className='top6'>Date:...............................</h2>
                      <br></br>
                      <br></br>
                      <h2 className='top7'>Date:.....................</h2>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div className='container'>
                    <div className='top8'>
                      <div className='container'>
                        <table className=" table border border-dark">
                          <thead>
                            <tr>
                              <th scope="col">SI.NO</th>
                              <th scope="col">PARTICULARS</th>
                              <th scope="col">QTY</th>
                              <th scope="col">NOTE</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>XXXXXXXXXXXXX </td>
                              <td>1 No</td>
                              <td>YYYYYYYYYYYYYY</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>XXXXXXXXXXXXX </td>
                              <td>1 No</td>
                              <td>YYYYYYYYYYYYYY</td>
                            </tr>
                          </tbody>
                        </table>
                        <br></br>
                        <div className='top9'><b>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</b></div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className='top10'><b>Authorised Signatory</b></div>
                      </div>
                      <br></br>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <button onClick={handlePrint} className="print__button">  Print </button>
  </>
  )
}
export default DeliveryChallan;



