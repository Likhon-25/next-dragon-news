import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
            {/* অ্যানিমেটেড ৪৪ */}
            <h1 className="text-[150px] md:text-[250px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse">
                404
            </h1>

            {/* টেক্সট */}
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">ওপস! পেজটি হারিয়ে গেছে</h2>
                <p className="text-gray-400 text-lg">আপনি যে পেজটি খুঁজছেন তা সম্ভবত সরানো হয়েছে বা ভুল লিঙ্কে এসেছেন।</p>
            </div>

            {/* বাটন উইথ বাউন্স ইফেক্ট */}
            <div className="mt-10 animate-bounce">
                <Link 
                    href={"/" }
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/50"
                >
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default NotFound;