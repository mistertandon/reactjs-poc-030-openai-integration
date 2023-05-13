import "./SeoKeywords.scss";
const SeoKeywords = ({ keywords }) => {
  return (
    <>
      {keywords.map((keyword, index) => {
        return <p key={`keyword-${index}`}>{keyword}</p>;
      })}
    </>
  );
};

export default SeoKeywords;
