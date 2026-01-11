export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <main className="flex flex-col items-center justify-center px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-black mb-12 max-w-4xl" style={{ fontFamily: 'var(--font-inter)' }}>
          Building a system that helps desks<span className="bg-[#fff9c4] px-2 whitespace-nowrap">avoid repeat mistakes</span>before the next trade.
        </h1>
        
        <a
          href="https://www.linkedin.com/in/yagnadeep-reddy-3a1505205/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 transition-opacity hover:opacity-70"
          aria-label="LinkedIn Profile"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="black"
            className="w-8 h-8 md:w-10 md:h-10"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </main>
    </div>
  );
}
