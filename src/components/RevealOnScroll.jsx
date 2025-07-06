export const RevealOnScroll = ({ children }) => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
            <div className="relative z-20">
                {children}
            </div>
        </div>
    )
}