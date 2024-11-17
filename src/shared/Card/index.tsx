import Tags from "../Tags";

type CardProps = {
  maxWidth: string;
  maxHeight: string;
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
  maxHeight,
  maxWidth,
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
    <a
      href={linkUrl}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-col border rounded-2xl w-full hover:bg-gray-100 justify-center items-center  text-center  ${borderClass} ${bgClass} `}
      style={{
        borderColor,
        paddingLeft: `${px}`,
        paddingRight: `${px}`,
        paddingTop: `${py}`,
        paddingBottom: `${py}`,
        maxWidth: `${maxWidth}`,
        maxHeight: `${maxHeight}`,
        boxShadow: "3px 3px 6px #0200804d",
      }}
    >
      <div className="justify-center items-center flex flex-col text-center">
        <h2 className="mb-2 text-custom-gray text-lg font-medium">{name}</h2>
        <p className="text-sm text-custom-gray ">{content}</p>
        <div className="border m-3 p-4 rounded-lg border-border-color">
          <img src={img} alt={name} className="max-h-[100px]" />
        </div>
        <span>
          {tags.map((tag) => (
            <Tags content={[tag]} key={tag} />
          ))}
        </span>
      </div>
    </a>
  );
};

export default Card;
