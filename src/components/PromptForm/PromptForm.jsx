import { useForm } from "react-hook-form";
import "./PromptForm.scss";

const PromptForm = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-field--container">
          <label
            htmlFor="form-field--user_prompt"
            className="form-field__input--label"
          >
            What you are thinking to solve, let me know
          </label>
          <input
            id="form-field--user_prompt"
            className="form-field__input"
            {...register("user_prompt", {
              validate: {
                shouldNotEmpty: (value) => {
                  const emptyCheck =
                    typeof value === "undefined" || value === "" ? false : true;

                  return emptyCheck || "Please enter a query";
                },
              },
            })}
          />
          {errors?.user_prompt && (
            <p className="form-field__input--error">
              {errors?.user_prompt?.message}
            </p>
          )}
        </div>

        <div className="form-field--container">
          <input type="submit" className="form-field__button--submit" />
        </div>
      </form>
    </>
  );
};

export default PromptForm;
