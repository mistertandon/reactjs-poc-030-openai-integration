import { useForm } from "react-hook-form";

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "",
//   temperature: 0.7,
//   max_tokens: 256,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
// });

const ContentGenerator = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { ai_prompt } = data;
  };

  return (
    <article>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__field--container">
            <label
              htmlFor="formfield--ai_prompt"
              className="form__field__input--label"
            >
              What you are thinking to solve, let me know
            </label>
            <input
              id="formfield--ai_prompt"
              className="form__field__input"
              {...register("ai_prompt", {
                validate: {
                  shouldNotEmpty: (value) => {
                    const emptyCheck =
                      typeof value === "undefined" || value === ""
                        ? false
                        : true;

                    return emptyCheck || "Please enter a query";
                  },
                },
              })}
            />
            {errors?.ai_prompt && (
              <p className="form__field__input--error">
                {errors?.ai_prompt?.message}
              </p>
            )}
          </div>

          <div className="form__field--container">
            <input type="submit" className="form__field__button--submit" />
          </div>
        </form>
      </section>
    </article>
  );
};

export default ContentGenerator;
