interface InitiativeDescriptionProps {
    header: string;
    description: string;
    thumbnailUrl: string;
}

export default function InitiativeDescription({
    header,
    description,
    thumbnailUrl,
}: InitiativeDescriptionProps) {
    return (
        <div className="flex flex-col sm:flex-row w-full">
            <div className="w-full sm:w-[60%]">
                <div className="text-nefacblue text-2xl sm:text-3xl font-semibold mb-2">
                    {header}
                </div>
                <div className="text-base sm:text-lg">
                    {description}
                </div>
            </div>

            <img
                src={thumbnailUrl}
                alt="Education Initiative Thumbnail Image"
                className="w-full sm:w-[40%] max-w-[400px] h-auto object-cover rounded-3xl"
            />
        </div>
    );
}
