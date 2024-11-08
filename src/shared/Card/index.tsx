import Tags from "../Tags";

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
  linkUrl?: string;
  tags?: string[];
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
  linkUrl,
  tags = [],
}: CardProps) => {
  const borderClass = hasBorder ? `border ${borderColor}` : "";
  const bgClass = bg ? `bg-${bg}` : "bg-transparent";

  return (
    <div
      className={`${borderClass} ${bgClass} flex justify-center items-center flex-col `}
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
      <h2 className="mb-2 text-custom-gray text-lg font-medium">{name}</h2>
      <p className="text-sm ">{content}</p>
      <a href={linkUrl} target="blank" className="my-6">
        <img src={img} alt={name} className="max-h-[100px]" />
      </a>
      <span>
        {tags.map((tag) => (
          <Tags content={[tag]} key={tag} />
        ))}
      </span>
    </div>
  );
};

export default Card;
