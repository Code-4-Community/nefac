interface InitiativeDescriptionProps {
  header: string;
  description: string;
  thumbnailUrl?: string;
}

export default function InitiativeDescription({
  header,
  description,
  thumbnailUrl,
}: InitiativeDescriptionProps) {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="w-full">
        <div className="text-[#3C3F60] text-2xl sm:text-3xl font-semibold mb-2">
          {header}
        </div>
        <div className="text-sm sm:text-base md:text-lg lg:text-xl">
          {description}
        </div>
      </div>

      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt="Education Initiative Thumbnail"
          className="w-full sm:w-[40%] max-w-[400px] h-auto object-cover rounded-3xl"
        />
      )}
    </div>
  );
}
