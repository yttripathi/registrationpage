

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/10/400/250",
    "https://picsum.photos/id/20/400/250",
    "https://picsum.photos/id/30/400/250",
  ];

  const [index, setIndex] = React.useState(0);

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const previousImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1>Image Slider</h1>

      <img
        src={images[index]}
        alt="slider"
        style={{
          width: "400px",
          height: "250px",
          objectFit: "cover",
        }}
      />

      <br />
      <br />

      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};
