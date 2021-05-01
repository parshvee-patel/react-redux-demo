// ! Pre-configured Axios Import
import axios from "../helpers/axios-handler";

//! Fetch All Staff Details
const fetchStaffDetails = async () => {
  let staffs = await axios
    .get(`/api/v1/staffdetails`)
    .catch((ex) => console.error(ex.toJSON()));
  return staffs.data;
};

//! Add New Staff
const addStaff = async (data) => {
  let response = await axios
    .post("/api/v1/staffdetails", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((ex) => console.error(ex.toJSON()));
  if (response != null) {
    if (response.status >= 200 && response.status < 300) return true;
    else return false;
  } else {
    return false;
  }
};

// ! Update Staff Record
const updateStaffById = async (data, id) => {
  let response = await axios
    .put(`/api/v1/staffdetails/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .catch((ex) => console.error(ex.toJSON()));
  if (response != null) {
    if (response.status >= 200 && response.status < 300) return true;
    else return false;
  } else {
    return false;
  }
};

// ! Fetch Single Staff Record
const fetchStaffById = async (id) => {
  let staffs = await axios
    .get(`/api/v1/staffdetails/${id}`)
    .catch((ex) => console.error(ex.toJSON()));
  return staffs.data;
};

// ! Delete Single Staff Record
const deleteStaffById = async (id) => {
  let staffs = await axios
    .delete(`/api/v1/staffdetails/${id}`)
    .catch((ex) => console.error(ex.toJSON()));
  return staffs.data;
};

// ! Export All Functions
const staffRegistration = {
  fetchStaffDetails,
  addStaff,
  updateStaffById,
  fetchStaffById,
  deleteStaffById,
};

export default staffRegistration;
