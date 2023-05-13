import { useForm } from "react-hook-form";

// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";

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

    const userPrompt = `Could you please modify prompt "${ai_prompt}" 
    and provide a new highly efficient prompt that would help you to get 
    the requested job done? Kindly keep in mind, new prompt will use by 
    content developer in order to complete professional work.
    You can analyze and find out the target industry,
    then you can add various options so that new prompt
    is in accordance to serve relevant industry`;

    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const refinedPromptRequest = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userPrompt,
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
    });

    const refinedPrompt = refinedPromptRequest.data.choices[0].text;

    const userQueryRequest = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: refinedPrompt,
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
    });
    const queryResult = userQueryRequest.data.choices[0].text;

    console.log(`ai_prompt: ${ai_prompt}`);
    console.log(`refinedPrompt: ${refinedPrompt}`);
    console.log(`queryResult: ${queryResult}`);

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
