interface PropsType {
    title?: string;
    description?: string;
    progress: number,
    type?: string
}

const ProgressBar = ({ title, description, progress, type }: PropsType) => {

    const getTypeColor = () => {
        switch (type) {
            case "info": return { backgroundStyle: "bg-blue-500", textStyle: "text-neutral-700 text-sm" }
            case "success": return { backgroundStyle: "bg-green-500", textStyle: "text-neutral-600" }
            case "error": return { backgroundStyle: "bg-red-500", textStyle: "text-red-500" }
            default: return { backgroundStyle: 'bg-blue-500 ', textStyle: "text-neutral-600" };
        }
    }

    const customStyle = getTypeColor()
    return (
        <div className="progress-bar-root w-full ">
            <span className="text-sm font-bold pb-1 block">{title}</span>
            <div className={`progress-bar-container w-full h-3 bg-gray-200 rounded`}>
                <div className={`progress-bar text-sm h-full ${customStyle.backgroundStyle} rounded`} style={{ width: `${progress}%` }}></div>
            </div>
            <span className={`${customStyle.textStyle} pt-1 block`}>
                {description}
            </span>
        </div >
    )
}

export default ProgressBar