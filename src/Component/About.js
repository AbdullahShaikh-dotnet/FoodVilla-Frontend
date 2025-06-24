import React from 'react';
import AboutUser from './AboutUser';
import AboutUserClass from './AboutUserClass';

const About = () => {
    return (
        <div className="min-h-[80vh] bg-gray-50 flex flex-col items-center py-10 px-2">
            <section className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 mb-8 text-center">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-2">React Learning Project</h1>
                <p className="text-lg text-gray-600">
                    A personal journey into mastering React.js and modern web development.
                </p>
            </section>
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">What I'm Learning</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>React Components & Props</li>
                        <li>React Router for Navigation</li>
                        <li>State Management</li>
                        <li>Modern React Practices</li>
                    </ul>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Technologies Used</h2>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                        <li>React.js</li>
                        <li>React Router DOM</li>
                        <li>Parcel Bundler</li>
                        <li>Modern JavaScript (ES6+)</li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-700 mb-4">About the Author</h2>
                {/* <AboutUser /> */}
                <AboutUserClass name="Abdullah Khan" title="Frontend Developer" email="abdullah@email.com" />
            </div>
        </div>
    );
};

export default About;