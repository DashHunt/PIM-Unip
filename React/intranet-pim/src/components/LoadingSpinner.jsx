import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
  const stylesLoading = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: '400px'
  };


  return (
    <div style={stylesLoading}>
      <Spinner variant="warning" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoadingSpinner;
