import axios from 'axios';

export default {


  ////////////////////////  API CALLS TO CLAIMS ROUTES  //////////////////////
getAllClaims: () => {
    return axios.get("/api/claims");
  },
getClaimById: (id) => {
    return (axios.get(`/api/claim/${id}`));
  },
postClaim: (data) => {
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
  return (axios.post("/api/claims", claimData));
  },

updateClaim:(data) => {
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
  return (axios.post(`/api/claim/${data.id}`, claimData));
  },

deleteClaim: (id) => {
    return (axios.delete(`/api/claim/${id}`));  
  }
  ////////////////////////  API CALLS TO CLAIMS ROUTES  //////////////////////
};

