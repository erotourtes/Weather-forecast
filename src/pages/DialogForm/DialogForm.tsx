import { IoClose } from "react-icons/io5";
import styles from "./DialogForm.module.css";
import { useForm } from "react-hook-form";
import Divider from "../../components/Divider";
import RequiredFormFieldTitle from "../../components/RequiredFormFieldTitle";
import Button from "../../components/Button/Button";

const CITY = "city";
const START_DATE = "start date";
const END_DATE = "end date";

interface DialogFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const DialogForm = ({ onClose, onSubmit }: DialogFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // city, start date, end date, image url

  return (
    <div className={`flex column space-between ${styles.container}`}>
      <div className={`flex row center space-between ${styles.padding}`}>
        <h3>Create trip</h3>
        <IoClose onClick={onClose} size={25} className="click" />
      </div>

      <Divider />

      <div className="flex1 flex center-v">
        <form className={`${styles.padding}`} onSubmit={handleSubmit(onSubmit)}>
          <RequiredFormFieldTitle title="City" />
          <select {...register(CITY)}>
            <option value="istanbul">Istanbul</option>
            <option value="ankara">Ankara</option>
            <option value="izmir">Izmir</option>
            <option value="antalya">Antalya</option>
          </select>

          <RequiredFormFieldTitle title="Start Date" />
          <input type="date" {...register(START_DATE)} />

          <RequiredFormFieldTitle title="End Date" />
          <input type="date" {...register(END_DATE)} />
        </form>
      </div>

      <Divider />

      <div className={`flex row end ${styles.buttonRow} ${styles.padding}`}>
        <Button onClick={onClose} type="outlined">
          Cancel
        </Button>
        <Button type="filled">Save</Button>
      </div>
    </div>
  );
};

export default DialogForm;
