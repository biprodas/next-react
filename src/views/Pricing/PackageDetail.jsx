import React from 'react';
 
export default function PackageDetail({pkg}){
  // console.log(props);
  // const  {pkg} = props;
  console.log(pkg);
  return (
    <div className="col-md-4">
          <div className="card text-center">
              <div className="card-header h5">
              {pkg.title}
              </div>
              <div className="card-body">
                  <h5 className="card-title h4">{pkg.price()}</h5>
                  <p className="card-text">{pkg.bandwith}</p>
                  <p className="card-text">{pkg.storage}</p>
                  <p className="card-text">{pkg.support}</p>
                  <p className="card-text">{pkg.access}</p>
              </div>
              <div className="card-footer" style={{background:'white'}}>
              <button type="button" className={pkg.btnClass} style={pkg.btnStyle}>{pkg.btnText}</button>
              </div>
          </div>
      </div>
  )
}
