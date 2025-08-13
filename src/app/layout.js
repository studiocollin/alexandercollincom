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
        <header className="fixed top-0 left-0 w-full px-10 py-6 z-50 flex justify-between items-start text-xs">
          {/* Name on the left */}
          <Link href="/" className="hover:opacity-60 font-medium">
            Alexander Collin
          </Link>
          
           <nav className="flex space-x-6">
            <Link href="mailto:alexander@alexandercollin.com" className="hover:opacity-60 font-medium">
            E-mail
          </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
