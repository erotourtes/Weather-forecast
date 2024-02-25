const ErrorElement = ({ error }: { error: any }) => {
  let msg = "An error occurred.";
  if (error instanceof Error) {
    msg = error.message;
  } else if (typeof error === "string") {
    msg = error;
  }
  return (
    <div
      style={{
        backgroundColor: "red",
        color: "white",
        padding: "1rem",
        borderRadius: ".7rem",
      }}
    >
      {msg}
    </div>
  );
};

export default ErrorElement;
