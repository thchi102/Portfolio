export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
                    Contact
                </h2>
                <div className="w-[60vw] max-w-5xl mx-auto grid grid-cols-1 gap-6">
                    <div className="p-6 space-y-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-xl mb-2">Email</h3>
                                    <p className="text-gray-300 mb-4">
                                        thchi102@gmail.com
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-xl mb-2">Phone Number</h3>
                                    <p className="text-gray-300 mb-4">
                                        +852 63688614
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-bold text-xl mb-2">Location</h3>
                                    <p className="text-gray-300 mb-4">
                                        Hong Kong University of Science and Technology
                                        <br />
                                        Clear Water Bay, Hong Kong
                                    </p>
                                </div>
                            </div>
                        <div className="flex flex-col mt-6">
                            <div className="flex flex-col h-full justify-end items-end">
                                <div className="mb-0 mt-auto">
                                    <h3 className="font-bold text-xl mb-2 text-right">Socials</h3>
                                    <div className="flex gap-4">
                                        <a
                                            href="https://github.com/thchi102"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-blue-500 transition-colors text-2xl"
                                            aria-label="GitHub"
                                        >
                                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                                                <path d="M10 0c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051A9.396 9.396 0 0 0 10 4.958a9.375 9.375 0 0 0-2.503.345C5.586 3.977 4.746 4.252 4.746 4.252c-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493C2.865 18.627 0 14.783 0 10.253 0 4.59 4.478 0 10 0"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/ting-hsuan-chi-thchi102/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-blue-500 transition-colors text-2xl"
                                            aria-label="LinkedIn"
                                        >
                                            <svg fill="currentColor" viewBox="0 0 37 37" className="w-8 h-8">
                                            <path d="M28.778 1.004H3.191a2.185 2.185 0 0 0-2.186 2.159v25.672a2.186 2.186 0 0 0 2.186 2.161h25.612c1.2 0 2.175-.963 2.194-2.159V3.165a2.195 2.195 0 0 0-2.195-2.161h-.029.001zM9.9 26.562H5.446V12.251H9.9zM7.674 10.293a2.579 2.579 0 1 1 2.579-2.58v.004a2.577 2.577 0 0 1-2.577 2.577h-.003zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.252h4.266v1.951h.058a4.686 4.686 0 0 1 4.22-2.312h-.009c4.5 0 5.332 2.962 5.332 6.817v7.855z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/thisisjonathanchi/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-blue-500 transition-colors text-2xl"
                                            aria-label="Twitter"
                                        >
                                            <svg fill="currentColor" viewBox="0 0 26 26" className="w-8 h-8">
                                            <path fill-rule="evenodd" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd"/>
                                            <path d="M18 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
                                            <path fill-rule="evenodd" d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 0 0-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 0 0-2.622 2.622ZM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 0 0-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 0 0 1.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 0 0 1.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 0 0-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3Z" clip-rule="evenodd"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}