function ImageShow({ image }) {
  return (
    <img
      src={image.urls.small}
      alt={image.description || "Unsplash Image"}
      className="w-full h-48 object-cover rounded-md shadow-md"
    />
  );
}

export default ImageShow;
