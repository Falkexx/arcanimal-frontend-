type CardProps = {
  width: string;
  height: string;
  bg?: string;
  hasBorder: boolean;
  borderColor?: string;
  px: string;
  py: string;
  name?: string;
  content?: string;
  img?: string;
  tags?: string;
};

const Card = ({
  bg,
  height,
  width,
  hasBorder,
  borderColor,
  px,
  py,
  name,
  content,
  img,
  tags,
}: CardProps) => {
  const borderClass = hasBorder ? `border border-${borderColor}` : "";
  const bgClass = bg ? `bg-${bg}` : "bg-transparent";
  const heightClass = height ? `h-${height}` : "h-auto";

  return (
    <div
      className={`${borderClass} ${bgClass} ${heightClass}`}
      style={{
        borderColor,
        paddingLeft: `${px}`,
        paddingRight: `${px}`,
        paddingTop: `${py}`,
        paddingBottom: `${py}`,
        maxWidth: `${width}`,
        width: "100%",
        maxHeight: `${height}`,
        boxShadow: " 3px 3px 6px #0200804d",
        borderRadius: "10px",
      }}
    >
      <h2>{name}</h2>
      <p>{content}</p>
      <img src="" alt="" />
      <span>{tags}</span>
    </div>
  );
};

export default Card;
