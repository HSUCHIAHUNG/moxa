import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('page1')
  }

  return (
    <>
      <button onClick={navigateHandler}>navigate</button>
      <Link to="page1">Link</Link>
      <br />
      
    </>
  );
}
export default HomePage;
