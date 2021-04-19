import './ErrorMessage.css';

export const ErrorMessage = ({error}) => {
  console.log(error)
  return (
    <div className="error-message">
      <h1>Oh Oh... Something Went Wrong</h1>
      <h3>{error.message}</h3>
    </div>
  );
}