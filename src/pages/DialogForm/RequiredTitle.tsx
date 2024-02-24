import RequiredFormFieldTitle from "../../components/RequiredFormFieldTitle";

const RequiredTitle = ({ title }: { title: string }) => {
  return (
    <div
      style={{
        marginBottom: ".3rem",
        marginTop: "1.5rem",
      }}
    >
      <RequiredFormFieldTitle title={title} />
    </div>
  );
};

export default RequiredTitle;
