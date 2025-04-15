import Link from 'next/link';
import "./styles/globals.css";

export const metadata = {
  title: "Alexander Collin",
  description: "Visual direction with permanence.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-normal"
      >
        <header className="fixed top-0 left-0 w-full px-6 py-4 z-50 flex justify-between items-start text-xs">
          {/* Name on the left */}
          <Link href="/" className="hover:opacity-60 font-medium">
            Alexander Collin
          </Link>

          {/* Nav on the right */}
          <nav className="flex space-x-6">
            <Link href="/work" className="hover:opacity-60">Work</Link>
            <Link href="/archive" className="hover:opacity-60">Archive</Link>
            <Link href="/bio" className="hover:opacity-60">Bio</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
