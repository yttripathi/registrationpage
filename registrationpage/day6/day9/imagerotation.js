const ImageRotation = () => {
  const [degree, setDegree] = React.useState(0);

  const rotateImage = () => {
    setDegree(degree + 90);
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "50px" }}>
      <h1>Image Rotation</h1>

      <img
        src="https://picsum.photos/id/40/300/300"
        alt="rotation"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          transform: rotate(${degree}deg)
        }}
      />

      <br />
      <br />

      <button onClick={rotateImage}>
        Rotate Image
      </button>
    </div>
  );
};