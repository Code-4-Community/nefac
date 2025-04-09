interface ArticleCardProps {
  thumbnailUrl: string;
  title: string;
  summary: string;
  articleUrl: string;
}

const ArticleCard = ({ thumbnailUrl, title, summary, articleUrl }: ArticleCardProps) => {
  return (
    <a 
      href={articleUrl} 
      className="block w-5/6 bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full mx-auto"
    >
      <div className="flex flex-col flex-grow">
        <div className="h-60 p-6 mb-4">
          <img
            className="w-full h-60 object-cover rounded-xl"
            src={thumbnailUrl}
            alt={`${title} thumbnail`}
          />
        </div>
        <div className="p-6 flex-grow">
          <h2 className="block text-[20px] leading-tight font-bold text-black">
            {title}
          </h2>
          <p className="mt-2 text-black text-[14px]">
            {summary}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;