const RequiredFormFieldTitle = ({ title }: { title: string }) => (
  <h4 style={{ margin: 0 }}>
    <span style={{ color: "red" }}>*</span> {title}
  </h4>
);

export default RequiredFormFieldTitle;
