import { FaPlus } from "react-icons/fa";

const styles: Record<string, React.CSSProperties> = {
  main: {
    width: "200px",
    height: "200px",
    minWidth: "200px",
    minHeight: "200px",
    backgroundColor: "var(--color-light-grey)",
  },
  header: {
    margin: 0,
  },
};

const AddCardBtn = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div
      onClick={onClick}
      style={styles.main}
      className="flex center column click"
    >
      <FaPlus />
      <h4 style={styles.header}>Add trip</h4>
    </div>
  );
};

export default AddCardBtn;
