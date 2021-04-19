import './ErrorMessage.css';

export const ErrorMessage = ({error, useFake}) => {
  return (
    <div className="error-message">
      <h1>Oh Oh... Something Went Wrong</h1>
      <h3>{error.message}</h3>
      <button
        style={{marginTop:'15px'}}
        className="btn"
        onClick={useFake}
      >
          {'Use Saved JSON'}
      </button>
    </div>
  );
}