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
      <form onSubmit={handleSubmit(submitHandler)} className="form__form--container">
        <div className="form-field__user_prompt--container">
          <label
            htmlFor="form-field--user_prompt"
            className="user_prompt--label"
          >
            Create a blog post using your idea
          </label>
          <input
            id="form-field--user_prompt"
            placeholder={"Enter your idea"}
            className="user_prompt__input"
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

        <div className="form-field__submit--container">
          <input type="submit" className="form-field__button--submit" />
        </div>
      </form>
    </>
  );
};

export default PromptForm;
