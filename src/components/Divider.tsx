const Divider = ({ size = 1 }: { size?: number }) => {
  return (
    <div
      style={{
        width: "100%",
        height: size,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    />
  );
};

export default Divider;
