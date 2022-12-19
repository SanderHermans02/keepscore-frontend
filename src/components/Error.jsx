export default function Error({ error }) {
  if (error) {
    return (
      <div className="alert alert-danger">
        <h4 className="alert-heading text-red-500">An error occured</h4>
        <h3 className="">{error.message || JSON.stringify(error)}</h3>
      </div>
    );
  }

  return null;
}