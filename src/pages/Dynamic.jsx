import { useParams } from "react-router-dom";

export default function Dynamic() {
  const params = useParams();

  return (
    <>
      <p>Dynamic</p>
      <p>{params.id}</p>
    </>
  );
}
