import { IoSearch } from "react-icons/io5";
import "./Input.css";

interface InputProps {
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className="baseInput">
      <input
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

const SearchInput = (props: InputProps) => {
  return (
    <div className="searchInput">
      <IoSearch />
      <Input
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
export { SearchInput };
