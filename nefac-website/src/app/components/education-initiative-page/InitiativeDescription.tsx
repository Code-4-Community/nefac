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
        <div className="flex flex-row w-full">
            <div className="w-[60%]">
                <div className="text-blue-900 text-[32px]">
                    {header}
                </div>
                <div className="text-[16px]">
                    {description}
                </div>
            </div>
            <img
                src={thumbnailUrl}
                className="rounded-3xl w-[30%] object-cover items-center justify-center ml-4 mb-4"
                alt="Education Initiative Thumbnail Image"
            />
        </div>
    )
}