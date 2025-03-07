export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between">
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                            <span className="sr-only">About</span>
                            About
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                            <span className="sr-only">Privacy</span>
                            Privacy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                            <span className="sr-only">Terms</span>
                            Terms
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-600">
                            <span className="sr-only">Contact</span>
                            Contact
                        </a>
                    </div>
                    <p className="mt-4 text-center text-gray-500 md:mt-0">
                        &copy; {currentYear} Product Catalog. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}