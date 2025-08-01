import ImageShow from "./ImageShow";

function ImageList({ images }) {
  return (
    <div className="flex flex-wrap -mx-2">
      {images.map((image, i) => (
        <div key={i} className="w-1/3 px-2 mb-4">
          <ImageShow image={image} />
        </div>
      ))}
    </div>
  );
}

export default ImageList;
