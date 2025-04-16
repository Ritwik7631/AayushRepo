import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AuthProvider } from "@/lib/contexts/AuthContext";
import { AppProvider } from "@/lib/contexts/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FitGrocery - Personalized Meal Plans & Local Grocery Recommendations",
  description: "Get personalized meal plans and local grocery store recommendations that fit your budget and dietary preferences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <AppProvider>
            <header className="bg-white shadow-sm">
              <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <Link href="/" className="font-bold text-xl text-indigo-600">
                    FitGrocery
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-8">
                    <Link href="/how-it-works" className="text-gray-600 hover:text-indigo-600">
                      How It Works
                    </Link>
                    <Link href="/pricing" className="text-gray-600 hover:text-indigo-600">
                      Pricing
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-indigo-600">
                      About
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <Link
                    href="/login"
                    className="text-gray-600 hover:text-indigo-600 mr-4"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/get-started"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="md:hidden">
                  {/* Mobile menu button */}
                  <button type="button" className="text-gray-600 hover:text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  </button>
                </div>
              </nav>
            </header>

            <main className="flex-grow">{children}</main>

            <footer className="bg-gray-100">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">FitGrocery</h3>
                    <p className="text-gray-600">
                      Personalized meal plans with local grocery recommendations that fit your budget.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="text-gray-600 hover:text-indigo-600">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="text-gray-600 hover:text-indigo-600">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-gray-600 hover:text-indigo-600">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/blog" className="text-gray-600 hover:text-indigo-600">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/faqs" className="text-gray-600 hover:text-indigo-600">
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link href="/help" className="text-gray-600 hover:text-indigo-600">
                          Help Center
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/privacy" className="text-gray-600 hover:text-indigo-600">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms" className="text-gray-600 hover:text-indigo-600">
                          Terms of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <p className="text-gray-500 text-sm text-center">
                    &copy; {new Date().getFullYear()} FitGrocery. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
