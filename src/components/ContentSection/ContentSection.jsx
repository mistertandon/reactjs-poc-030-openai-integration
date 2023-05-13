import "./ContentSection.scss";

const ContentSection = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        return <p key={`item-${index}`}>{item}</p>;
      })}
    </div>
  );
};

export default ContentSection;
