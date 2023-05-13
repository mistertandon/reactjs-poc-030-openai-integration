import "./ContentLayout.scss";

const ContentLayout = ({ content }) => {
  return (
    <div>
      {content.map((item, index) => {
        return <p key={`item-${index}`}>{item}</p>;
      })}
    </div>
  );
};

export default ContentLayout;
