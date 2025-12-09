function GoodsCard({ image, title, price }) {
  return (
    <div style={{
      width: "230px",
      background: "#fff",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      margin: "15px",
      transition: "0.3s",
      cursor: "pointer"
    }}
    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      <img 
        src={image}
        alt={title}
        style={{ width: "100%", height: "160px", objectFit: "cover" }}
      />

      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "0 0 10px" }}>{title}</h3>

        <p style={{ 
          fontWeight: "bold", 
          color: "#4f46e5", 
          fontSize: "18px",
          marginBottom: "10px"
        }}>
          {price} грн
        </p>

        <button style={{
          width: "100%",
          padding: "10px",
          border: "none",
          background: "#4f46e5",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "0.3s"
        }}
        onMouseEnter={e => e.currentTarget.style.background = "#4338ca"}
        onMouseLeave={e => e.currentTarget.style.background = "#4f46e5"}
        >
          Купити
        </button>
      </div>
    </div>
  );
}

export default GoodsCard;
