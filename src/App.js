import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import CoverLetter from "./components/CoverLetter";

function App() {
  const [coverLetterContent, setCoverLetterContent] = useState("Test");
  return (
    <div className="App">
      <h1>Generate Your Cover Letter</h1>
      <Form setCoverLetterContent={setCoverLetterContent} />
      <CoverLetter coverLetterContent={coverLetterContent} />
    </div>
  );
}

export default App;
