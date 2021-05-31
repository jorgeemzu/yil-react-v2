import { React } from "react";

export default function PageHeader(props) {
  const { titulo } = props;

  return (
    <div className="page-header">
      <div className="overlay-container">
        <div className="container">
          <h1>{titulo}</h1>
        </div>
      </div>
    </div>
  );
}
