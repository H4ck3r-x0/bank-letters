import React from 'react';
import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {

    function getClassName(active, isDisabled) {
        const baseClasses = "px-4 py-2 mx-1 text-sm leading-5 font-medium rounded-md focus:outline-none transition duration-150 ease-in-out";
        if (active) {
            return `${baseClasses} bg-gray-700 text-white border border-transparent`;
        } else if (isDisabled) {
            return `${baseClasses} bg-white text-gray-400 border border-gray-300 cursor-not-allowed`;
        } else {
            return `${baseClasses} bg-white text-primary border border-gray-300 hover:bg-gray-100 hover:text-primary-dark`;
        }
    }

    return (
        links.length > 3 && (
            <div className="flex justify-center">
                <div className="flex rounded-md">
                    {links.map((link, key) => (
                        link.url === null ? (
                            <div
                                key={key}
                                className={getClassName(link.active, true)}
                            >
                                {link.label}
                            </div>
                        ) : (
                            <Link
                                key={key}
                                className={getClassName(link.active, false)}
                                href={link.url}
                                preserveScroll
                            >
                                {link.label}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        )
    );
}
