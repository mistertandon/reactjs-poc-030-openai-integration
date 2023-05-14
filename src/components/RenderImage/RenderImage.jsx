import "./RenderImage.scss";
const RenderImage = ({ url }) => {
  return (
    <div className="image--container">
      <img src={url} alt="Generated Image" className="image--image" />
    </div>
  );
};

export default RenderImage;
