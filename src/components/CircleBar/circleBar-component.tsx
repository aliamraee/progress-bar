
interface PropType {
    percentage: number
}

const circleBar = ({ percentage = 0 }: PropType) => {
    return (
        <div className="relative">
            <div className="w-3 h-3 rounded-full bg-red-500 absolute"></div>

            <svg width={100} height={100}>
                <circle stroke="#ccc" cy={50} cx={50} r={47} fill="transparent" strokeWidth={4} />
                <circle stroke="red" cy={50} cx={50} r={47} fill="transparent" strokeWidth={4} strokeDasharray={251.2} strokeDashoffset={251.2 - (251.2 * percentage) / 100} />
            </svg>
        </div>
    )
}

export default circleBar