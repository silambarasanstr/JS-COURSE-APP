const MethodDetail = ({ method }) => {
  if (!method) return <p>Method not found!</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{method.title}</h1>
      <p>
        <strong>Syntax:</strong> {method.syntax}
      </p>

      {method.parameters && (
        <>
          <h3 className="mt-4 font-semibold">Parameters:</h3>
          <ul className="list-disc ml-6">
            {method.parameters.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </>
      )}

      <h3 className="mt-4 font-semibold">Example:</h3>
      <pre className="bg-gray-100 p-4 rounded">{method.example}</pre>
    </div>
  );
};

export default MethodDetail;
