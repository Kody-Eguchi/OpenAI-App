import { Blocks } from "react-loader-spinner";

export default function CoverLetter(props) {
  return (
    <div className="card w-75 mx-auto cover-letter-container d-flex justify-content-center align-items-center">
      {props.coverLetterContent === "loading" ? (
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          className=""
        />
      ) : (
        <div
          dangerouslySetInnerHTML={{ __html: props.coverLetterContent }}
          className="align-left"
        />
      )}
    </div>
  );
}
