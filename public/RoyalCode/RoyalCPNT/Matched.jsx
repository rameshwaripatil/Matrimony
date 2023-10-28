import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import AuthUser from "../../auth/Authuser";


const Matched = ({id,data,first,second,third,fourth,fifth}) =>{
    const {http,user} = AuthUser();
    const [MatchedConditions,sEtMatchedConditions] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const openModal = () => {
      setModalIsOpen(true);
        http.get(`/show_profile_match_record/${user.id}`).then((res) => {
        const fillter =    res.data.condition_counts.find((item) => item.tbl_user_id === id);
        console.log(fillter);
        sEtMatchedConditions((prevConditions) => fillter);
        if (fillter !== undefined) {
            sEtMatchedConditions((prevConditions) => [fillter]);
          } else {
            // Handle the case when no match is found (e.g., set to an empty array)
            sEtMatchedConditions([]);
          }
      
          // Log the updated state
          console.log(MatchedConditions);
          }).catch((e) => {
            console.log(e);
          });
          

    }
    
//   useEffect(()=>{
//     filteredCondition = MatchedConditions.find((item) => item.tbl_user_id === id);
//     console.log(filteredCondition);
//   },[modalIsOpen])
    const closeModal = () => {
      setModalIsOpen(false);
    }
    return(
        <>
       <Link onClick={openModal} className="text-success border-none">{data}% Match</Link>
         <Modal
                                style={{
                                  content: {
                                    width: '400px', // Set the width
                                    height: '300px', 
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)"// Set the height
                                    // You can also add other styles like 'margin', 'padding', etc.
                                  },
                                }}
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        
                <>
             
                <h2 className="mb-50">Profile Matched By </h2>
            <p>{    first &&  first ?(
                <>1. Caste</>
            ):(<></>)}</p>
            <p>{  second && second ?(
                <>2. Education</>
            ):(<></>)}</p>
            <p>{  third && third?(
                <>3. Employed In </>
            ):(<></>)}</p>
                <p>{fourth && fourth ?(
                <>4. Religion </>
            ):(<></>)}</p>
                <p>{ fifth && fifth ? (
                <>5. Occupation </>
            ):(<></>)}</p>
                </>
        
      
      
      </Modal></>
    )
}
export default Matched;