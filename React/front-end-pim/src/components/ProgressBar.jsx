import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressComponent(props) {
  return <ProgressBar animated now={props.currentStep} max={3} label={`${props.currentStep} etapa de 3 no total`}/>;
}

export default ProgressComponent;