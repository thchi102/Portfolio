export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all space-y-2 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="font-bold text-xl mb-2">Cloud Platform</h3>
                        <p className="text-gray-300 mb-4">
                            project description
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {
                                ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"].map((skill, key) => {
                                    return <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all
                                                         hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {skill}
                                        </span>
                                    })
                            }
                        </div>
                        <div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-2">
                                View Project
                            </a>
                        </div>
                    </div>

                    <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all space-y-2 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="font-bold text-xl mb-2">Cloud Platform</h3>
                        <p className="text-gray-300 mb-4">
                            project description
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {
                                ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"].map((skill, key) => {
                                    return <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all
                                                         hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                            {skill}
                                        </span>
                                    })
                            }
                        </div>
                        <div>
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-2">
                                View Project
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}