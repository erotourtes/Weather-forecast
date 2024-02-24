import { IoClose } from "react-icons/io5";
import styles from "./DialogForm.module.css";
import { useForm } from "react-hook-form";
import Divider from "../../components/Divider";
import Button from "../../components/Button/Button";
import ErrorLine from "../../components/ErrorLine";
import { TripT } from "../../types/trip";
import { uuid } from "../../utils/utils";
import RequiredTitle from "./RequiredTitle";

const CITY = "city";
const START_DATE = "startDate";
const END_DATE = "endDate";

type FormValues = {
  [CITY]: string;
  [START_DATE]: string;
  [END_DATE]: string;
};

interface DialogFormProps {
  onClose: () => void;
  onSubmit: (data: TripT) => void;
}

const DialogForm = ({ onClose, onSubmit }: DialogFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <form
      className={`flex column space-between ${styles.container}`}
      onSubmit={handleSubmit((data) => onSubmit({ ...data, id: uuid() }))}
    >
      <div className={`flex row center space-between ${styles.padding}`}>
        <h3>Create trip</h3>
        <IoClose onClick={onClose} size={25} className="click" />
      </div>

      <Divider />

      <div className={`flex1 flex center-v ${styles.padding}`}>
        <div className={`w-full`}>
          <RequiredTitle title="City" />
          <select {...register(CITY, { required: true })}>
            <option selected disabled value={""}>
              Select your city
            </option>
            <option value="istanbul">Istanbul</option>
            <option value="ankara">Ankara</option>
            <option value="izmir">Izmir</option>
            <option value="antalya">Antalya</option>
          </select>
          {errors[CITY] && <ErrorLine text="City is required" />}

          <RequiredTitle title="Start Date" />
          <input type="date" {...register(START_DATE, { required: true })} />
          {errors[START_DATE] && <ErrorLine text="Start date is required" />}

          <RequiredTitle title="End Date" />
          <input type="date" {...register(END_DATE, { required: true })} />
          {errors[END_DATE] && <ErrorLine text="End date is required" />}
        </div>
      </div>

      <Divider />

      <div className={`flex row end ${styles.buttonRow} ${styles.padding}`}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button type="submit" variant="filled">
          Save
        </Button>
      </div>
    </form>
  );
};

export default DialogForm;
