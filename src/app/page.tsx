import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            FitGrocery
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl">
            Personalized meal plans with local grocery recommendations that fit your budget
          </p>
          <div className="mt-10">
            <Link 
              href="/get-started"
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 md:py-20">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Profile Setup</h3>
              <p className="text-gray-600">Tell us about your goals, preferences, and dietary restrictions</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <span className="text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Meal Plans</h3>
              <p className="text-gray-600">Get a custom meal plan designed for your goals and preferences</p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <span className="text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Shopping Guide</h3>
              <p className="text-gray-600">Find the best local stores with pricing that fits your budget</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 md:py-20 bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FitGrocery?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium">Budget-Friendly Options</h3>
                <p className="mt-2 text-gray-600">Find meal plans that fit your financial situation with local pricing information</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium">Local Store Information</h3>
                <p className="mt-2 text-gray-600">Discover the best places to shop near you with up-to-date pricing</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 1 1 0-3.75Z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium">Personalized Meal Plans</h3>
                <p className="mt-2 text-gray-600">Tailored to your weight goals, dietary preferences, and allergies</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-md bg-indigo-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium">Easy Grocery Lists</h3>
                <p className="mt-2 text-gray-600">Simple, organized shopping lists that make grocery trips efficient</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 md:py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to transform your diet?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Start your journey to healthier eating with personalized meal plans that fit your budget
          </p>
          <Link 
            href="/get-started"
            className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get Started For Free
          </Link>
          <p className="mt-4 text-sm text-gray-500">7-day free trial, no credit card required</p>
        </div>
      </div>
    </main>
  );
}
