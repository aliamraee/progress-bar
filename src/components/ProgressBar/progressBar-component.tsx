interface PropsType {
    title?: string;
    description?: string;
    progress: number
}

const ProgressBar = ({ title, description, progress }: PropsType) => {
    return (
        <div className="progress-bar-root">
            <span>{title}</span>
            <div className='progress-bar-container'>
                <div className="progress-bar">{progress}%</div>
            </div>
            <span>
                {description}
            </span>
        </div>
    )
}

export default ProgressBar