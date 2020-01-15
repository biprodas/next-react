import React from 'react';
import {packages} from  '../../services/packageService';
import PackageDetail from './PackageDetail';

// function packageTemplate(pkg){
//   return (
//     <div className="col-md-4">
//           <div className="card text-center">
//               <div className="card-header h5">
//               {pkg.title}
//               </div>
//               <div className="card-body">
//                   <h5 className="card-title h4">{pkg.price()}</h5>
//                   <p className="card-text">{pkg.bandwith}</p>
//                   <p className="card-text">{pkg.storage}</p>
//                   <p className="card-text">{pkg.support}</p>
//                   <p className="card-text">{pkg.access}</p>
//               </div>
//               <div className="card-footer" style={{background:'white'}}>
//               <button type="button" className={pkg.btnClass} style={pkg.btnStyle}>{pkg.btnText}</button>
//               </div>
//           </div>
//       </div>
//   )
// }

// function PackageTemplate({pkg}){
//   // console.log(props);
//   // const  {pkg} = props;
//   console.log(pkg);
//   return (
//     <div className="col-md-4">
//           <div className="card text-center">
//               <div className="card-header h5">
//               {pkg.title}
//               </div>
//               <div className="card-body">
//                   <h5 className="card-title h4">{pkg.price()}</h5>
//                   <p className="card-text">{pkg.bandwith}</p>
//                   <p className="card-text">{pkg.storage}</p>
//                   <p className="card-text">{pkg.support}</p>
//                   <p className="card-text">{pkg.access}</p>
//               </div>
//               <div className="card-footer" style={{background:'white'}}>
//               <button type="button" className={pkg.btnClass} style={pkg.btnStyle}>{pkg.btnText}</button>
//               </div>
//           </div>
//       </div>
//   )
// }

// const employees = [
//   {name:"Biprodas", com: "Microdream"},
//   {name:"Swadip", com: "Utshab"},
//   {name:"Istiqur", com: "Semicolon"}
// ]

// function MyInfo({employee, customer}){
//   //const {employee, customer} = props;
//   return <div className="card m-3 bg-light p-3">
//     <h3>{employee.name}</h3>
//     <h4>{customer.name}</h4>
//   </div>  
// }
// const mn = "Biprodas royu"

export default function Package(){

  return (
    <React.Fragment>
      {/* <Free />
      <Pro  />
      <Enterprise /> */}

      {packages.map(pkg=>{
        return (
          //packageTemplate(p)
          <PackageDetail pkg={pkg} />
          // <MyInfo employee={emp} customer={{name: "Milon"}} />
          //MyInfo(emp)
        )
      })}


    </React.Fragment>
  )
}

