const RequiredTitle = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        marginBottom: ".3rem",
        marginTop: "1.5rem",
      }}
    >
      <h4 style={{ margin: 0 }}>
        <span style={{ color: "red" }}>*</span> {title}
      </h4>
    </div>
  );
};

export default RequiredTitle;
