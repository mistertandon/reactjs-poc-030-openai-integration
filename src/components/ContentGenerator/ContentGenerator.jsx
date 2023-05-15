import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import {
  Loader,
  Header,
  PromptForm,
  SeoKeywords,
  ContentLayout,
  RenderImage,
  ErrorFallback,
} from "./../";
import "./ContentGenerator.scss";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const ContentGenerator = () => {
  const [errorFlagStatus, setErrorFlagStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [heading, setHeading] = useState("");
  const [outline, setOutline] = useState([]);
  const [contentLayout, setContentLayout] = useState([]);
  const [seoKeywordsState, setSeoKeywordsState] = useState([]);
  const [image1024, setImage1024] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const { user_prompt } = data;
    try {
      setErrorFlagStatus(false);
      setLoadingStatus(true);
      setHeading("");
      setContentLayout([]);
      setSeoKeywordsState([]);
      setImage1024("");

      const userPrompt = `Could you please modify prompt "${user_prompt}"
      and provide a new highly efficient prompt that would help you to get
      the requested job done? Kindly keep in mind, new prompt will use by
      content developer in order to complete professional work.
      You can analyze and find out the relevant industry,
      then you can add various options so that new prompt
      is in accordance to serve relevant industry.
      Note: New prompt must be single line.
      `;

      const refinedPromptRequest = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: userPrompt,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1,
      });

      const refinedPrompt = refinedPromptRequest.data.choices[0].text;

      let refinedPromptSanitized = refinedPrompt.replace("\n", "");
      setHeading(refinedPromptSanitized);

      const userQueryRequest = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${refinedPrompt}
                Note: Split Generated content into multiple section and define outline for each section as well.`,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1,
      });
      const userQueryResult = userQueryRequest.data.choices[0].text;

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
      }
      console.log(contentSections);
      setOutline(...contentSections.slice(0, 1));
      setContentLayout(contentSections.slice(1));

      const keywordExtractPrompt = `Could you please analyze below bog heading an content and
       suggest SEO keywords?
       These keywords will be use by professional SEO specialist.
       Blog heading : ${refinedPrompt}
       Blog content: ${userQueryResult}
       Note: Output must be comma separated string only.
       `;

      const keywordExtractorRequest = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: keywordExtractPrompt,
        temperature: 0.8,
        max_tokens: 256,
        top_p: 1,
      });
      const keywordExtractorResult =
        keywordExtractorRequest.data.choices[0].text.split(",");

      setSeoKeywordsState(keywordExtractorResult);

      const imageRequest = await openai.createImage({
        prompt: keywordExtractorRequest.data.choices[0].text,
        n: 1,
        size: "1024x1024",
      });
      const imageUrl = imageRequest.data.data[0].url;

      setImage1024(imageUrl);
    } catch (error) {
      setErrorFlagStatus(true);
    } finally {
      setLoadingStatus(false);
    }
  };

  return (
    <article className="blog-container">
      <section className="header--container">
        <Header />
      </section>

      <section className="form--container">
        <PromptForm submitHandler={onSubmit} />
      </section>

      {errorFlagStatus && (
        <section className="error--container">
          <ErrorFallback />
        </section>
      )}

      {loadingStatus && (
        <section className="loader--container">
          <Loader heading={heading} />
        </section>
      )}

      {!errorFlagStatus && !loadingStatus && (
        <>
          {contentLayout.length > 0 && (
            <section className="page-layout--container">
              <ContentLayout
                outline={outline}
                contentLayout={contentLayout}
                heading={heading}
              />
            </section>
          )}

          {seoKeywordsState.length > 0 && (
            <section className="seo-keywords--container">
              <SeoKeywords keywords={seoKeywordsState} />
            </section>
          )}

          {image1024 && (
            <section className="page-image--container">
              <RenderImage url={image1024} />
            </section>
          )}
        </>
      )}
    </article>
  );
};

export default ContentGenerator;
