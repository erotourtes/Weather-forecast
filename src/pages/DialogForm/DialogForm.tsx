import { IoClose } from "react-icons/io5";
import styles from "./DialogForm.module.css";
import {
  FieldError,
  UseFormRegister,
  Validate,
  useForm,
} from "react-hook-form";
import Divider from "../../components/Divider";
import Button from "../../components/Button/Button";
import ErrorLine from "../../components/ErrorLine";
import { TripT } from "../../types/trip";
import { getDateFromNow, uuid } from "../../utils/utils";
import RequiredTitle from "./RequiredTitle";
import locations from "../../dummy/locations";
import config from "../../config";

const PLACE = "city";
const START_DATE = "startDate";
const END_DATE = "endDate";

type FormValues = {
  [PLACE]: string;
  [START_DATE]: string;
  [END_DATE]: string;
};

interface DialogFormProps {
  onClose: () => void;
  onSubmit: (data: TripT) => void;
}

const DialogForm = ({
  onClose: onCloseOrig,
  onSubmit: onSubmitOrig,
}: DialogFormProps) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onClose = () => {
    onCloseOrig();
    reset();
  };

  const validateEndDate: Validate<string, FormValues> = (
    endDate: string,
    form: FormValues
  ) => {
    const startStr = form[START_DATE];
    if (!startStr) return true;
    const start = new Date(startStr);
    const end = new Date(endDate);

    if (start.getTime() > end.getTime()) {
      return "End date must come after start date";
    }
  };

  const onSubmit = (data: FormValues) => {
    const [city, country] = data[PLACE].split(", ");

    onSubmitOrig({
      id: uuid(),
      city,
      country,
      startDate: data[START_DATE],
      endDate: data[END_DATE],
    });
    reset();
  };

  return (
    <form
      className={`flex column space-between ${styles.container}`}
      onSubmit={handleSubmit((data) => onSubmit(data))}
    >
      <div className={`flex row center space-between ${styles.padding}`}>
        <h3>Create trip</h3>
        <IoClose onClick={onClose} size={25} className="click" />
      </div>

      <Divider />

      <div className={`flex1 flex center-v ${styles.padding}`}>
        <div className={`w-full`}>
          <CityInput register={register} errors={errors[PLACE]} />
          <StartDateInput register={register} errors={errors[START_DATE]} />
          <EndDateInput
            validation={validateEndDate}
            register={register}
            errors={errors[END_DATE]}
          />
        </div>
      </div>

      <Divider />

      <BottomBtns onClose={onClose} />
    </form>
  );
};

export default DialogForm;

const CityInput = ({
  register,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  errors?: FieldError;
}) => {
  return (
    <>
      <RequiredTitle title="City" />
      <select defaultValue={""} {...register(PLACE, { required: true })}>
        <option value={""}>Select your city</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      {errors && <ErrorLine text="City is required" />}
    </>
  );
};

const StartDateInput = ({
  register,
  errors,
}: {
  register: UseFormRegister<FormValues>;
  errors?: FieldError;
}) => {
  return (
    <>
      <RequiredTitle title="Start Date" />
      <input
        type="date"
        min={getDateFromNow(0)}
        max={getDateFromNow(config.limitOfDays)}
        {...register(START_DATE, { required: true })}
      />
      {errors && <ErrorLine text="Start date is required" />}
    </>
  );
};

const EndDateInput = ({
  register,
  errors,
  validation,
}: {
  register: UseFormRegister<FormValues>;
  validation: Validate<string, FormValues>;
  errors?: FieldError;
}) => {
  return (
    <>
      <RequiredTitle title="End Date" />
      <input
        type="date"
        min={getDateFromNow(0)}
        max={getDateFromNow(config.limitOfDays)}
        {...register(END_DATE, { required: true, validate: validation })}
      />
      {errors && (
        <ErrorLine
          text={
            errors.type === "required" ? "End Date is required" : errors.message
          }
        />
      )}
    </>
  );
};

const BottomBtns = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className={`flex row end ${styles.buttonRow} ${styles.padding}`}>
      <Button onClick={onClose} variant="outlined">
        Cancel
      </Button>
      <Button type="submit" variant="filled">
        Save
      </Button>
    </div>
  );
};
