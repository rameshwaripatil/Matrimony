import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';

const Brides = () => {
  const{http,token}=Authuser();

  const [bri, setBrides] = useState([]);

  const Brides = () => {
    http.get(`get_member_detail_bride`)
      .then((response) => {
        setBrides(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        // Handle errors
        console.error('Error adding bride data:', error);
      });
  };
  useEffect(()=>
  {  
    
  }, [token])
  return (
    <div>

<section className="breadcrumb__section breadcrumb__bga">
  <div className="container">
    <div className="row row-cols-1">
      <div className="col">
        <div className="breadcrumb__content"><h1 className="breadcrumb__content--title mb-10 text-white">Brides</h1>
         <ul className="breadcrumb__content--menu d-flex">
          <li className="breadcrumb__content--menu__items">
            <a className="text-white" href="/brides/\">Home</a></li>
            <li className="breadcrumb__content--menu__items">
              <span className="text__secondary text-white">Brides</span>
            </li>
         </ul>
      </div>
      </div>
    </div>
  </div>
</section>

<section id="about_last">
 <div class="container">
  <div class="row">
	   <div class="col-sm-12">
		<div class="about_last">
		  <h1><span>Our</span> Team Unity!</h1>
		  <p>Vestibulum lacinia arcu eget nulla taciti sociosqu ad litora torquent.</p>
		</div>
	   </div>
	   <div class="team col-sm-12  clearfix">
		 {bri.map((el)=>(
		
			<div class="col-sm-4  col-lg-4">
       
			 <div class="team_1 clearfix"key={el.member_id}>
			 <div className="team__card--thumbnail" style={{height: "300px"}}>
            <img className="team__card--thumbnail__img display-block " src={el.member_user_img1

} alt="team-thumb" style={{height: 300}} />
            </div>
       <table align="center" style={{marginTop: 10}}>
              <tbody>
                <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  
                  <td>Birth Date</td>
                  <td>:</td>
                  <td>{el.date_of_birth} </td>
                </tr>
                <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>Height</td>
                  <td>:</td>
                  <td>{el.height}</td>
                </tr>
                  <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>Age </td>
                  <td>:</td>
                  <td>{el.age}</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>Frist Name </td>
                  <td>:</td>
                  <td>{el.first_name}</td>
                  </tr>
                  <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>Education</td>
                  <td>:</td>
                  <td>{el.member_highest_education} </td></tr><tr />
                  <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>employed_in</td>
                  <td>:</td>
                  <td>{el.member_employed_in}</td></tr>
                  <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>income</td>
                  <td>:</td>
                  <td>/-</td>
                  </tr><tr />
                  <tr style={{borderBottom: '1px solid rgb(204, 204, 204)'}}>
                  <td>Taluka</td>
                  <td>:</td>
                  <td>{el.taluka_name}</td></tr>
                  </tbody>
                  </table>
			 </div>
      
			</div>
        ))}
		
		   </div>
  </div>
  </div>
</section>
 </div>


                          


  )
}

export default Brides