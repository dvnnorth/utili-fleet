import axios from "axios";

export default {
  register: function(data) {
    return axios.post("/register", data).then(res => {
      console.log(res);
    });
  },
  login: data => {
    return axios.post("/api/login", data);
  },
  logout: function() {
    return axios.get("/logout");
  },
  getAllVehicles: function() {
    return axios.get("/api/vehicles");
  },

  ////////////////////////  BEGING API CALLS TO CLAIMS ROUTES  //////////////////////
  getAllClaims: () => {
    return axios.get("/api/claims");
  },
  getClaimById: id => {
    return axios.get(`/api/claim/${id}`);
  },
  postClaim: data => {
    const claimData = {
      InsuranceCompany: data.InsuranceCompany,
      ClaimNumber: data.ClaimNumber,
      AdjusterName: data.AdjusterName,
      AdjusterEmail: data.AdjusterEmail,
      Estimate: data.Estimate,
      FinalCost: data.FinalCost,
      OpenClosed: data.OpenClosed,
      Status: data.Status
    };
    return axios.post("/api/claims", claimData);
  },

  updateClaim: data => {
    const claimData = {
      InsuranceCompany: data.InsuranceCompany,
      ClaimNumber: data.ClaimNumber,
      AdjusterName: data.AdjusterName,
      AdjusterEmail: data.AdjusterEmail,
      Estimate: data.Estimate,
      FinalCost: data.FinalCost,
      OpenClosed: data.OpenClosed,
      Status: data.Status
    };
    return axios.post(`/api/claim/${data.id}`, claimData);
  },

  deleteClaim: id => {
    return axios.delete(`/api/claim/${id}`);
  }
  ////////////////////////  END API CALLS TO CLAIMS ROUTES  //////////////////////
};
