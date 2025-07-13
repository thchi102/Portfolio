import { useState, useEffect } from "react"

const TypewriterEffect = ({ textList, speed, deleteSpeed, loop }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textListIndex, setTextListIndex] = useState(0);
    const [waitCounter, setWaitCounter] = useState(0);

    useEffect(() => {
        const text = textList[textListIndex];
        const interval = setInterval(() => {
            if (isDeleting) {
                setDisplayedText(d => d.slice(0, -1)); 
                setIndex(index - 1);
            } else if (index < text.length) {
                setDisplayedText(d => d + text[index]); 
                setIndex(index + 1);
            } else if (index === text.length) {
                // Wait for 1 second (10 intervals at 100ms each)
                if (waitCounter < 10) {
                    setWaitCounter(waitCounter + 1);
                } else {
                    setIsDeleting(true);
                    setWaitCounter(0);
                }
            }

            if (index === 0 && isDeleting) {
                setIsDeleting(false);
                setTextListIndex((prevIndex) => (prevIndex + 1) % textList.length);
                if (loop) {
                    setIndex(0);
                    setDisplayedText('');
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearInterval(interval);
    }, [index, textList, textListIndex, speed, deleteSpeed, isDeleting, loop, waitCounter]);

    return <span className="typewriter-text">{displayedText}</span>;
};

export const Home = () => {
    const textList = [
        "Artificial Intelligence",
        "Robotics",
        "Software Development",
        "DJing",
        "Research"
    ]


    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right">
                    Hi, I'm Jonathan Chi
                </h1>
                <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                    I'm a software engineer with a passion for <TypewriterEffect textList={textList} speed={100} deleteSpeed={50} loop={true} />
                </p>

                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px-rgba(59,130,246,0.4)] ">
                        View Projects
                    </a>
                    <a href="src/assets/CHI_Ting_Hsuan_Resume.pdf" target="_blank" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px-rgba(59,130,246,0.4)] hover:bg-blue-500/10">
                        Resume
                    </a>
                </div>
            </div>
        </section>
    )
}