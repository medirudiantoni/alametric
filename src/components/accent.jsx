const Accent = ({ width, top, left }) => (
  <div style={{ position: "absolute", top: top, left: left, width: width }}>
    <div className="aspect-square rounded-full border-2 border-secondary flex items-center justify-center">
      <div className="w-3/5 aspect-square rounded-full bg-secondary"></div>
    </div>
  </div>
);

export default Accent;