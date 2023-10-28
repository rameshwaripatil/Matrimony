import { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import AuthUser from "../../auth/Authuser";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import Star from "../cmp/Star";
import RemoveShortlist from "../cmp/RemoveShortlist";
import { Table, Pagination } from "react-bootstrap";

const WhoView = ()=>{
  const { id } = useParams();
  const { http } = AuthUser();
  const [ShortlistData, SetShortlistData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust the number of items per page as needed

  useEffect(() => {
    http.get(`/visited_me/${id}`).then((res) => {
      SetShortlistData(res.data.data);

    }).catch((e) => {
      console.log(e);
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // Function to paginate data
  const paginateData = (data, currentPage, itemsPerPage) => {
    const indexOfLastProfile = currentPage * itemsPerPage;
    const indexOfFirstProfile = indexOfLastProfile - itemsPerPage;
    return data.slice(indexOfFirstProfile, indexOfLastProfile);
  };

  const totalPages = Math.ceil(ShortlistData.length / itemsPerPage);
  const currentProfiles = paginateData(ShortlistData, currentPage, itemsPerPage);

    return(
        <>
         <div className="container">
        <h4 className="text-center p-4">Who Visited My Profile</h4>
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="text-center mt-2 mb-2">
              <Link
                className="text-center btn btn-outline-danger btn-lg"
                to="/dashboard"
              >
                Go Back
              </Link>
            </div>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Profile Photo</th>
                  <th>Name</th>
                  <th>Date of Birth</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentProfiles.map((item, Index) => (
                  <tr key={Index}>
                    <td>
                      {item.member_user_img1 === null ? (
                        <>
                          <img
                            src={require("../pages/staticimg/profie_photo.jpg")}
                            style={{ height: "50px", width: "50px" }}
                            alt="Profile"
                          />
                        </>
                      ) : (
                        <img
                          src={`https://admin.royalmarriagebureau.com/uploads/userimg/${item.member_user_img1}`}
                          alt="My Image"
                          style={{ height: "50px", width: "50px" }}
                        />
                      )}
                    </td>
                    <td>{item.first_name}</td>
                    <td>{new Date(item.date_of_birth).toLocaleDateString("en-GB")}</td>
                      <td className="text-center">
                      <Link className="btn btn-outline-danger" to={`/single_view/${item.id}`}>
                        View Profile
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {/* Render the Pagination component */}
          </div>
        </div>
        <div className="row mb-50 mt-50 ">
        <div className="col-md-4 offset-sm-5 text-center" >
              <Pagination className="">
                <Pagination.Prev 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
        </div>
      </div>
        </>
    )
}
export default WhoView;