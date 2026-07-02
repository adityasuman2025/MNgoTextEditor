import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

// Inline compiled CSS statically during SSG build to eliminate render-blocking requests
const getCssContent = () => {
    try {
        const cssPath = path.resolve(process.cwd(), 'library/dist/style.css');
        return fs.readFileSync(cssPath, 'utf8');
    } catch (e) {
        return '';
    }
};
const cssContent = getCssContent();

export const metadata: Metadata = {
    metadataBase: new URL('https://adityas.site'),
    title: 'Aditya Suman | Senior Software Engineer | IIT Patna',
    description: 'Senior Software Engineer with 5+ years of experience building high-performance, responsive web applications using React, Next.js, and TypeScript. Alumnus of IIT Patna.',
    keywords: 'Aditya Suman, IIT Patna, Senior Software Engineer, React Developer, Next.js Developer, TypeScript Engineer, Frontend Specialist, Fullstack Developer',
    authors: [{ name: 'Aditya Suman', url: 'https://adityas.site' }],
    creator: 'Aditya Suman',
    alternates: {
        canonical: '/',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://adityas.site',
        title: 'Aditya Suman | Senior Software Engineer | IIT Patna',
        description: 'Senior Software Engineer with 5+ years of experience building high-performance, responsive web applications using React, Next.js, and TypeScript.',
        siteName: 'Aditya Suman Portfolio',
        images: [
            {
                url: 'https://adityas.site/xxxs.png',
                width: 512,
                height: 512,
                alt: 'Aditya Suman Portfolio Logo',
            },
        ],
    },
    twitter: {
        card: 'summary',
        title: 'Aditya Suman | Senior Software Engineer | IIT Patna',
        description: 'Senior Software Engineer with 5+ years of experience building high-performance web applications using React, Next.js, and TypeScript.',
        images: ['https://adityas.site/xxxs.png'],
    },
    icons: {
        icon: '/xxxs.png',
        shortcut: '/xxxs.png',
        apple: '/xxxs.png',
    },
};

export const viewport = {
    themeColor: '#181915',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <style dangerouslySetInnerHTML={{ __html: cssContent }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "ProfilePage",
                            "mainEntity": {
                                "@type": "Person",
                                "name": "Aditya Suman",
                                "jobTitle": "Senior Software Engineer",
                                "alumniOf": {
                                    "@type": "EducationalOrganization",
                                    "name": "Indian Institute of Technology Patna",
                                    "alternateName": "IIT Patna"
                                },
                                "url": "https://adityas.site",
                                "image": "https://adityas.site/xxxs.png",
                                "description": "Senior Software Engineer with 5+ years of experience specializing in React, Next.js, and TypeScript.",
                                "sameAs": [
                                    "https://github.com/adityasuman2025",
                                    "https://www.linkedin.com/in/adityasuman2025"
                                ],
                                "knowsAbout": [
                                    "Software Engineering",
                                    "React.js",
                                    "Next.js",
                                    "TypeScript",
                                    "JavaScript",
                                    "Node.js",
                                    "MongoDB",
                                    "SQL",
                                    "MERN Development",
                                    "Full Stack Development",
                                    "Frontend Development",
                                    "Web Applications",
                                    "Agentic AI Coding",
                                    "NPM Libraries",
                                    "Sublime Text Editor Clone"
                                ]
                            }
                        })
                    }}
                />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}
