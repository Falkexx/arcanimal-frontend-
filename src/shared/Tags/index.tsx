type TagProps = {
  content: string[];
};

const Tags = ({ content }: TagProps) => {
  return (
    <>
      {content.map((tag) => (
        <div
          className="border border-default-blue inline-block mr-3 rounded-lg text-[12px] font-semibold px-2 py-1 text-custom-black"
          key={tag}
        >
          {tag}
        </div>
      ))}
    </>
  );
};

export default Tags;
