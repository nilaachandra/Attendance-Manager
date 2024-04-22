import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../store/getStudentSlice"; // Import the fetchStudents action from the studentSlice
import { RiArrowLeftSFill, RiArrowRightSFill, RiDeleteBin2Fill, RiEdit2Fill, RiSearch2Line } from "@remixicon/react";
import ReactPaginate from "react-paginate";
import Input from "../reusable/Input";
import EditStudentModal from "./EditStudentModal";
import { useSession } from "@clerk/clerk-react";


const StudentsList = () => {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.fetchStudents); // Use the 'students' slice instead of 'getStudents'
  const { isLoaded, session } = useSession();
  const currentUser = isLoaded ? session.user.username : null;

  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleEditClick = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleEditModalClose = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  const handleEditSave = (updatedStudent) => {
    // Dispatch an action to update the student
    // dispatch(updateStudent(updatedStudent));
    // You need to define the 'updateStudent' action in your studentSlice
  };

  const handleDeleteClick = async (studentId) => {
    try {
      // Dispatch an action to delete the student
      // await dispatch(deleteStudent(studentId));
      // You need to define the 'deleteStudent' action in your studentSlice
    } catch (error) {
      console.error("error deleting student,", error);
    }
  };

  // Filter students based on search query
  const filteredStudents = searchQuery
    ? students.filter((student) =>
        student.studentname.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : students;

  // Pagination
  const itemsPerPage = 5;
  const offset = currentPage * itemsPerPage;
  const currentData = filteredStudents.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredStudents.length / itemsPerPage);

  return (
    <div className="w-full flex flex-col justify-center items-center raleway-regular">
      {status === "loading" && <div>Loading...</div>}
      {status === "failed" && <div>Error: {error}</div>}
      {status === "succeeded" && (
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <h2 className="text-xl font-bold">Students List</h2>
          <div className="w-full flex gap-4 justify-center items-center">
            <Input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-[30%] text-center"
            />
            <RiSearch2Line size={30} />
          </div>
          <table className="w-full font-bold">
            <thead>
              <tr className="text-center">
                <th>ID</th>
                <th>Name</th>
                <th>Batch</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((student, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{student.studentname.toUpperCase()}</td>
                  <td className="text-center">{student.batchname.toUpperCase()}</td>
                  <td className="text-center flex justify-center gap-6">
                    <RiEdit2Fill size={24} onClick={() => handleEditClick(student)} />
                    <RiDeleteBin2Fill size={24} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={<RiArrowLeftSFill size={30} />}
            nextLabel={<RiArrowRightSFill size={30} />}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"flex justify-center items-center gap-4 font-bold"}
            activeClassName={"bg-black text-white font-bold w-10 h-10 flex items-center justify-center rounded-full"}
          />
          <EditStudentModal
            isOpen={isEditModalOpen}
            onClose={handleEditModalClose}
            student={selectedStudent}
            onSave={handleEditSave}
          />
        </div>
      )}
    </div>
  );
};

export default StudentsList;
