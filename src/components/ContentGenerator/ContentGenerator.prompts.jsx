const redefinedPromptRequest = (user_prompt = "mango shake") => {
  return `Could you please modify prompt "${user_prompt}"
    and provide a new highly efficient prompt that would help you to get
    the requested job done? Kindly keep in mind, new prompt will use by
    content developer in order to complete professional work.
    You can analyze and find out the relevant industry,
    then you can add various options so that new prompt
    is in accordance to serve relevant industry.
    Note: New prompt must be single line.
    `;
};


const seoKeywordPromptRequest = (refinedPrompt, content) => {
  return `Could you please analyze below bog heading an content and
  suggest SEO keywords?
  These keywords will be use by professional SEO specialist.
  Blog heading : ${refinedPrompt}
  Blog content: ${content}
  Note: Output must be comma separated string only.
  `;
};

export { redefinedPromptRequest, seoKeywordPromptRequest };
