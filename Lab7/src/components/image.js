function Image({ src, width }) {
  return (
    <img 
      src={src} 
      alt="Малага"
      style={{ width: width, display: "block", margin: "20px auto", borderRadius: "15px", boxShadow: "0 6px 20px rgba(0,0,0,0.2)" }} 
    />
  );
}

export default Image;
