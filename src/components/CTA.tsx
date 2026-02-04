export default function CTA() {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* LEFT TEXT */}
            <div>
                <h2 className="text-2xl font-extrabold">
                    LET’S WORK TOGETHER!
                </h2>
                <p className="mt-1">
                    Available for iOS, ML & Web development projects
                </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">
                <a
                    href="mailto:acqmalfadhillalatief@gmail.com"
                    className="px-6 py-3 bg-black text-white border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition font-semibold"
                >
                    Send Email
                </a>

                <a
                    href="/resume.pdf"
                    target="_blank"
                    className="px-6 py-3 bg-white border-4 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition font-semibold"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}
