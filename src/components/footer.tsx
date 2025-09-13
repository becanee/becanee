"use client";


export function AppFooter() {
    return (
        <>
            <footer className="py-4 md:py-12">
                <div className="mx-auto max-w-5xl px-6">
                    <a
                        href="/"
                        aria-label="go home"
                        className="mx-auto block size-fit tracking-tight"
                    >
                        myAssessment
                    </a>
                    <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>Contact Support</span>
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>Privacy</span>
                        </a>
                        <a
                            href="#"
                            className="text-muted-foreground hover:text-primary block duration-150"
                        >
                            <span>Terms</span>
                        </a>
                    </div>
                    <span className="text-muted-foreground block text-center text-sm">
                        {" "}
                        © {new Date().getFullYear()} Klola Indonesia Ltd.
                    </span>
                </div>
            </footer>

        </>
    );
}