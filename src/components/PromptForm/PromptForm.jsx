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
        <div className="form__field--container">
          <label
            htmlFor="formfield--user_prompt"
            className="form__field__input--label"
          >
            What you are thinking to solve, let me know
          </label>
          <input
            id="formfield--user_prompt"
            className="form__field__input"
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
            <p className="form__field__input--error">
              {errors?.user_prompt?.message}
            </p>
          )}
        </div>

        <div className="form__field--container">
          <input type="submit" className="form__field__button--submit" />
        </div>
      </form>
    </>
  );
};

export default PromptForm;
