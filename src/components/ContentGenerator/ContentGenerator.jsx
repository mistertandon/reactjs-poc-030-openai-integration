import { useState } from "react";
import { useForm } from "react-hook-form";

// const { Configuration, OpenAIApi } = require("openai");
import { Configuration, OpenAIApi } from "openai";
import { SeoKeywords, ContentLayout, RenderImage } from "./../";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ContentGenerator = () => {
  const [outline, setOutline] = useState([]);
  const [contentLayout, setContentLayout] = useState([]);
  const [seoKeywordsState, setSeoKeywordsState] = useState([]);
  const [image1024, setImage1024] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { user_prompt } = data;

    setContentLayout([]);
    setSeoKeywordsState([]);
    setImage1024("");

    // const userPrompt = `Could you please modify prompt "${user_prompt}"
    // and provide a new highly efficient prompt that would help you to get
    // the requested job done? Kindly keep in mind, new prompt will use by
    // content developer in order to complete professional work.
    // You can analyze and find out the relevant industry,
    // then you can add various options so that new prompt
    // is in accordance to serve relevant industry.
    // Note: New prompt must be single line.
    // `;

    // const refinedPromptRequest = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: userPrompt,
    //   temperature: 0.8,
    //   max_tokens: 256,
    //   top_p: 1,
    // });

    // const refinedPrompt = refinedPromptRequest.data.choices[0].text;

    let refinedPrompt =
      "\nWhat are the best features of the Samsung Galaxy M33 5G?";

    // let refinedPromptSanitized = refinedPrompt.replace("\n", "");

    // const userQueryRequest = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: `${refinedPrompt}
    //           Note: Split Generated content into multiple section and define outline for each section as well.`,
    //   temperature: 0.8,
    //   max_tokens: 256,
    //   top_p: 1,
    // });
    // const userQueryResult = userQueryRequest.data.choices[0].text;

    let userQueryResult =
      "\n\nOutline\nI. Overview\nII. Design\nIII. Camera\nIV. Performance\nV. Battery\n\nI. Overview \nThe Samsung Galaxy M33 5G is a budget-friendly 5G phone with a broad range of features. It has a 6.5-inch HD+ Infinity-V display, an octa-core processor, 6GB RAM, 128GB internal storage, a 5000 mAh battery and a quad-camera setup.\n\nII. Design\nThe Samsung Galaxy M33 5G has a sleek and modern design. It comes with a 6.5-inch HD+ Infinity-V display and a waterdrop notch. The phone is constructed with a plastic body with a glossy finish and a textured rear panel. It has a side-mounted fingerprint scanner and a 3.5mm headphone jack. \n\nIII. Camera\nThe Samsung Galaxy M33 5G has a quad-camera setup on the rear, featuring a 48MP primary lens, an 8MP ultra-wide lens, a 2MP macro lens, and a 2MP depth sensor. It has a 13MP selfie camera. The cameras are capable of capturing stunning photos and videos.\n\nIV. Performance\nThe Samsung Galaxy M33 5";

    let userQueryResultSections = userQueryResult.split("\n\n");

    console.log(`userQueryResultSections:`, userQueryResultSections);
    let contentSections = [];
    for (let i = 1; i < userQueryResultSections.length; i++) {
      let userQueryResultSection = "";
      userQueryResultSection = userQueryResultSections[i].split("\n");

      contentSections[i - 1] = [];
      for (let j = 0; j < userQueryResultSection.length; j++) {
        contentSections[i - 1].push(userQueryResultSection[j]);
      }

      // console.log(contentSections);
      // console.log("====================================");
    }
    console.log(contentSections);
    setOutline(...contentSections.slice(0, 1));
    setContentLayout(contentSections.slice(1));

    // const keywordExtractPrompt = `Could you please analyze below bog heading an content and
    //  suggest SEO keywords?
    //  These keywords will be use by professional SEO specialist.
    //  Blog heading : ${refinedPrompt}
    //  Blog content: ${userQueryResult}
    //  Note: Output must be comma separated string only.
    //  `;

    // const keywordExtractorRequest = await openai.createCompletion({
    //   model: "text-davinci-003",
    //   prompt: keywordExtractPrompt,
    //   temperature: 0.8,
    //   max_tokens: 256,
    //   top_p: 1,
    // });
    // const keywordExtractorResult =
    //   keywordExtractorRequest.data.choices[0].text.split(",");

    const keywordExtractorResult =
      "\nMango shake recipe,delicious mango shake,special occasion shake,gathering ingredients,preparing the shake,enjoying the shake,mangoes,yogurt,ice,milk,honey,cardamom,vanilla extract,rose water,pulse blender,special touch,glass,ground cardamom,mango cubes,garnish.".split(
        ","
      );
    setSeoKeywordsState(keywordExtractorResult);
    console.log(keywordExtractorResult);

    // const imageRequest = await openai.createImage({
    //   prompt: `${keywordExtractorResult}`,
    //   n: 1,
    //   size: "1024x1024",
    // });
    // const imageUrl = imageRequest.data.data[0].url;

    const imageUrl =
      "https://oaidalleapiprodscus.blob.core.windows.net/private/org-oG9uKVT09GWfZ7AobgC4GgIL/user-eVIKSrl21l3c2BFCwx6QIVpZ/img-vVtnPpCMfTznSqbFlnpS4CFd.png?st=2023-05-13T15%3A49%3A48Z&se=2023-05-13T17%3A49%3A48Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-05-12T20%3A37%3A53Z&ske=2023-05-13T20%3A37%3A53Z&sks=b&skv=2021-08-06&sig=YXIxIBnwn/gUfQa7L19ABF5RoksMJJOlmhH11o4YpmQ%3D";
    setImage1024(imageUrl);
    // console.log(`user_prompt: ${user_prompt}`);
    // console.log(`refinedPrompt: ${refinedPrompt}`);
    // console.log(`userQueryResult: ${userQueryResult}`);
    // console.log(`keywordExtractorResult: ${keywordExtractorResult}`);
    // console.log(`imageRequestData:`, imageUrl);
  };

  return (
    <article>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                      typeof value === "undefined" || value === ""
                        ? false
                        : true;

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
      </section>
      <section>
        {contentLayout.length > 0 && (
          <ContentLayout
            outline={outline}
            contentLayout={contentLayout}
          />
        )}
      </section>
      <section>
        {seoKeywordsState.length > 0 && (
          <SeoKeywords keywords={seoKeywordsState} />
        )}
      </section>
      <section>{image1024 && <RenderImage url={image1024} />}</section>
    </article>
  );
};

export default ContentGenerator;
