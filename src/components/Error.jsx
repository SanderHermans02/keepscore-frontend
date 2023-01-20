export default function Error({ error }) {
  if (error) {
    return (
      <div className="alert alert-danger">
        <h4 className="alert-heading text-red-500 text-center">An error occured</h4>
        <h3 className="text-red-500 text-center">{error.message || JSON.stringify(error)}</h3>
      </div>
    );
  }

  return null;
}