import "./RenderImage.scss";
const RenderImage = ({ url }) => {
  return (
    <div className="image--container">
      <img src={"https://wallpapercave.com/wp/wp4471357.jpg"} alt="Generated Image" className="image--image" />
    </div>
  );
};

export default RenderImage;
