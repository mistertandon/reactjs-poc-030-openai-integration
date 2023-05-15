import "./Loader.scss";

const Loader = ({ heading = "" }) => {
  return (
    <div className="loader">
      <div className="loader__heading">
        Blog post is getting generated for topic -
      </div>
      <div className="loader__heading">{`${heading}`}</div>
    </div>
  );
};
export default Loader;
