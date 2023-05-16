import axios from "axios";
import { useState } from "react";

export default function Form(props) {
  const [candidateName, setCandidateName] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerAddress, setEmployerAddress] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [programmingLanguages, setProgrammingLanguages] = useState("");

  const handleCandidateNameChange = (e) => {
    setCandidateName(e.target.value);
  };

  const handleEmployerNameChange = (e) => {
    setEmployerName(e.target.value);
  };

  const handleEmployerAddressChange = (e) => {
    setEmployerAddress(e.target.value);
  };

  const handleJobTitleChange = (e) => {
    setJobTitle(e.target.value);
  };

  const handleProgrammingLanguagesChange = (e) => {
    setProgrammingLanguages(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:4000/api/generate";

    const requestData = {
      candidateName,
      employerName,
      employerAddress,
      jobTitle,
      programmingLanguages,
    };
    props.setCoverLetterContent("loading");
    try {
      const response = await axios.post(url, requestData, {
        responseType: "text",
      });
      props.setCoverLetterContent(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      action="POST"
      onSubmit={handleSubmit}
      className="needs-validation w-50 mx-auto my-3"
    >
      <div className="form-group">
        <label htmlFor="candidateName">Your Name</label>
        <input
          type="text"
          name="candidateName"
          className="form-control"
          onChange={handleCandidateNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="employerName">Employer Name</label>
        <input
          type="text"
          name="employerName"
          className="form-control"
          onChange={handleEmployerNameChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="employerAddress">Employer Address</label>
        <input
          type="text"
          name="employerAddress"
          className="form-control"
          onChange={handleEmployerAddressChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="jobtitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          className="form-control"
          onChange={handleJobTitleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="programmingLanguages">
          Programming Languages (e.g., Python, JavaScript)
        </label>
        <input
          type="text"
          name="programmingLanguages"
          className="form-control"
          onChange={handleProgrammingLanguagesChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Generate
      </button>
    </form>
  );
}
