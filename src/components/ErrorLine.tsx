const ErrorLine = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        color: "red",
        fontSize: "12px",
      }}
    >
      {text}
    </div>
  );
};

export default ErrorLine;
