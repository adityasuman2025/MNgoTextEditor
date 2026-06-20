import React from 'react';
import ReactDOM from 'react-dom/client';
import { MNgoTextEditor } from "./lib";
import packageJson from '../package.json';

const FILES = [
    {
        "type": "folder", "srcKey": "adityasuman", "defaultOpen": true,
        "files": [
            { "type": "file", "srcKey": "about_me.html" },
            { "type": "file", "srcKey": "contact_me.html" },
            { "type": "file", "srcKey": "education.html" },
            {
                "type": "folder", "srcKey": "work_experience",
                "files": [
                    { "type": "file", "srcKey": "systematic_fte.html" },
                    { "type": "file", "srcKey": "byjus_fte.html" },
                    { "type": "file", "srcKey": "mlcertific_intern.html" },
                    { "type": "file", "srcKey": "upbringo_intern.html" },
                    { "type": "file", "srcKey": "isro_intern.html" },
                    { "type": "file", "srcKey": "oxyvin_intern.html" },
                    { "type": "file", "srcKey": "ngcn_intern.html" },
                    { "type": "file", "srcKey": "catchfreedeal.html" }
                ],
            },
            {
                "type": "folder", "name": "academic_projects", "srcKey": "academic_projects",
                "files": [
                    { "type": "file", "srcKey": "btp.html" },
                    { "type": "file", "srcKey": "feedback_module.html" },
                    { "type": "file", "srcKey": "gate_security_app.html" },
                    { "type": "file", "srcKey": "key_issue_app.html" },
                    { "type": "file", "srcKey": "thesis_module.html" },
                    { "type": "file", "srcKey": "acad_result.html" },
                    { "type": "file", "srcKey": "exam_attendance.html" },
                    { "type": "file", "srcKey": "pdf_module.html" },
                    { "type": "file", "srcKey": "pda_module.html" },
                    { "type": "file", "srcKey": "rs_board.html" },
                    { "type": "file", "srcKey": "attendance_upload.html" },
                    { "type": "file", "srcKey": "contribute_module.html" },
                    { "type": "file", "srcKey": "noticeboard.html" },
                    { "type": "file", "srcKey": "ipr_module.html" },
                    { "type": "file", "srcKey": "forms_module.html" },
                    { "type": "file", "srcKey": "wifi_attend.html" },
                    { "type": "file", "srcKey": "calc.html" }
                ],
            },
            {
                "type": "folder", "srcKey": "other_projects",
                "files": [
                    { "type": "file", "srcKey": "react_image_annotate_npm_package.html" },
                    { "type": "file", "srcKey": "text_editor_npm_package.html" },
                    { "type": "file", "srcKey": "quiz_web_app.html" },
                    { "type": "file", "srcKey": "chat_web_app.html" },
                    { "type": "file", "srcKey": "qr_mobile_app.html" },
                    { "type": "file", "srcKey": "anwesha_2k18.html" },
                    { "type": "file", "srcKey": "iitp_motor.html" },
                ],
            },
            { "type": "file", "srcKey": "achievements.html" },
            { "type": "file", "srcKey": "skills_n_intr.html" },
            { "type": "file", "srcKey": "por.html" },
            { "type": "file", "srcKey": "resume.html" },
            { "type": "file", "srcKey": "follow_me.html" },
            { "type": "file", "srcKey": "info.html" },
        ]
    },
];
const FILES_CONTENT = {
    "about_me.html": {
        "title": "About Me",
        "content": `
            Hi There, I am <a>Aditya Suman</a> from India.<br/>
            I'm a <b>Senior Frontend Engineer</b> with <a>5.5+ years</a> of experience in building scalable & high-performance web applications utilising <b>JavaScript, TypeScript, React, and Next.js</b> as my core tech stack.<br/>
            I graduated from <b>IIT Patna</b> in 2020.<br/><br/>

            <ul>
                <li>I currently work remotely for a <b>US-based startup</b> where I independently build, own, and scale the entire frontend. So I am highly comfortable with <a>asynchronous collaboration</a>, independent problem-solving, and delivering high-quality code <a>across different time zones</a>. I directly collaborate with US-based stakeholders to translate their business requirements into scalable technical solutions, owning the complete feature delivery from scoping to production release.</li>
                <li>I also have experience in working with modern development cycles using <b>agentic coding tools like Cursor, Antigravity</b>. Be it from PRD Technical Planning, development to code reviews, which significantly <a>reduces feature delivery timeline</a> and improved code standards & maintainability.</li>
                <li>In my previous company, I co-led an architecture to convert a legacy infrastructure into a <b>modular React SDK</b>, that <a>reduced our infrastructure costs by around 50%</a>. I am deeply passionate about web performance and always target a <b>Web Vital Score of 95+</b> across my projects because you know fast software drives user retention.</li>
            </ul>
            <br>
            I’m looking for my next challenge in a fast-paced, product-driven environment where I can be part of frontend initiatives and collaborate with high-performing teams. Looking forward to discussing how I can add value to your team.
        `
    },
    "contact_me.html": {
        "title": "Contact Me",
        "content": '<b>Homepage: </b><a target="_blank" href="https://adityas.site">https://adityas.site</a><br><b>Email: </b><a href="mailto:adityasuman2025@gmail.com">adityasuman2025@gmail.com</a>, <a href="mailto:aditya.me16@iitp.ac.in">aditya.me16@iitp.ac.in</a><br><b>Phone: </b><a href="tel:+917424947945">+91-7424947945</a><br><b>LinkedIn: </b> <a target="_blank" href="https://www.linkedin.com/in/adityasuman2025">https://www.linkedin.com/in/adityasuman2025</a><br><b>GitHub: </b> <a target="_blank" href="https://github.com/adityasuman2025">https://github.com/adityasuman2025</a>'
    },
    "education.html": {
        "title": "Education",
        "content": "<ul><li>Bachelor Of Technology, <b>Indian Institute of Technology Patna (IIT P),</b> CPI- 7.08/10 (2016 - 2020) </li><li>Senior Secondary Schooling, <b>Magadh University</b> – 70.4% (2014 - 2016) </li><li> Secondary Schooling, CBSE, <b>R.P.S Public School, Bihar Sharif,</b> CGPA- 10/10 (2013 - 2014)</li></ul>"
    },

    "systematic_fte.html": {
        "title": "Senior Frontend Engineer",
        "content": `<div class="floatRight">December 2023 - Present</div><a href="https://www.systematicventures.com" target="_blank" class="title_a">Systematic Ventures - Remote</a><br /><br />
            <ul>
                <li><b>Frontend Ownership:</b> Lead and own the frontend team of the core product, collaborating directly with US-based stakeholders to scope, build, and deploy technical solutions. Architected complex frontend modules including dynamic layouts (<a>Profile Share</a>), multi-step forms (<a>Simplify Signup, Onboarding</a>), advanced client-side data filtering (<a>Advanced Search</a>) and AI Enhance & Chat.</li>
                <li><b>AI Workflow Innovation:</b> Integrated Agentic Coding Workflows (<a>Cursor</a>) into the dev lifecycle, accelerating feature delivery timeline.</li>
                <li><b>Performance Optimization:</b> Implemented strategic code-splitting and lazy-loaded heavy modules (<a>AI Score Charts/Insights</a>), shrinking initial JS payloads and optimizing network delivery costs. Managed client-side access levels by writing reusable rules and wrapper guards to separate Public & Private Profile data, NDA Signing workflows, and restricted Deal Rooms safely.</li>
                <li><b>Improved User Experience:</b> Engineered zero-lag UI rendering using API caching (react-query), predictive skeleton loaders, de-prioritizing non-critical scripts, paginated data delivery to achieve sub-second loading speeds.</li>
                <li><b>Saved Infra Cost:</b> Offloaded heavy data processing to the client side for complex data tables sorting/filtering and dynamic PDF exports protecting backend microservices from performance spikes.</li>
                <li><b>Business Impact:</b> Doubled user registration metrics (<a>2x growth</a>) via data pre-population and SSO authentication.</li>

                <li><b>Technologies:</b> JavaScript, TypeScript, React.js, Next.js, Posthog, Cursor, Netlify, Figma, Notion, etc.</li>
            </ul>
        `
    },
    "byjus_fte.html": {
        "title": "Senior Software Engineer",
        "content": `<div class="floatRight">August 2020 - November 2023</div><a href="https://www.byjus.com/" target="_blank" class="title_a">Byju's - Bangalore, India</a><br /><br />
            <ul>
                <li><b>Team Leadership:</b> Led a frontend team of 4 SDEs to systematically deliver monthly product requirements for Byju's Exam Prep (BEP).</li>
                <li><b>Infrastructure Migration:</b> Co-led the Subjective Assessment team to revamp legacy infrastructure into a modular React.js SDK saving our infrastructure operational costs by 50%, single-handedly executing the LLD/HLD and repository setup from scratch.</li>
                <li><b>Performance Optimization:</b> Achieved a Performance Web Vital Score of 95 through aggressive frontend optimizations.</li>
                <li><b>Built In-house Annotation Component:</b> Developed an Annotate Image component, integrated it into Correction SDK and converted a monolith to frontend-only service.</li>
                <li><b>Conversion Growth:</b> Redesigned and modularized the signup flow driving a marginal increase in signups.</li>
                 <li><b>Technologies:</b> JavaScript, typeScript, React.js, Tailwind CSS, Next.js, Node.js, Redux, Redux-Saga, Firebase, socket, vercel, AWS, etc</li>
            </ul>
        `
    },
    "mlcertific_intern.html": {
        "title": "Full-Stack Web Development Intern",
        "content": `<div class="floatRight">July 2020</div><a href="https://mlcertific.com" target="_blank" class="title_a">MLCertific - Remote, India</a><br /><br />
            <ul>
                <li>Worked as a <b>Web Developer</b> to develop a Certification Website.</li>
                <li>Developed the complete website on React and created its api on PHP</li>
                <li>Website contains features like user\'s cart, razorpay payment, online exam/test, certificate generation, validation and sharing</li>
                <li><b>Technologies:</b> React.js, PHP, MySQL, Bootstrap</li>
            </ul>
        `
    },
    "upbringo_intern.html": {
        "title": "App Development Intern",
        "content": `<div class="floatRight">April 2020 – June 2020</div><a href="https://www.upbringo.com/#/" target="_blank" class="title_a">UpBrinGO - Remote, India</a><br /><br />
            <ul>
                <li>Worked as an <b>App Developer</b> to develop a Mobile App compatible on Android & iOS both.</li>
                <li>Added features like <b>QR based Attendance, Offline first, Billing Module, Homework Module</b>, etc in the existing App.</li>
                <li>Developed complete <b>Billing & Homework module</b> which includes front-end, database design and back-end.</li>
                <li>Updated front-end of the complete App.</li>
                <li><b>Technologies:</b> React Native, Node.js, Serverless, GraphQL, MySQL</li>
            </ul>
        `
    },
    "isro_intern.html": {
        "title": "Engineering Intern",
        "content": `<div class="floatRight">May 2019 – July 2019</div><a href="https://www.istrac.gov.in/" target="_blank" class="title_a">ISRO Telemetry, Tracking and Command Network (ISTRAC) - Bangalore, India</a><br /><br />
            <ul>
                <li>Worked in <b>SDG Laboratory</b> (Software Development Group) of ISTRAC to develop a Android App & Web Interface for monitoring and controlling of MEOSAR.</li>
                <li>Created a <b>Web-Socket Client</b> in <b>Java</b> and <b>Web-Socket Client</b> in <b>JavaScript</b> to connect Mobile App & Web App respectively to the <b>Web-Socket Server</b> built on <b>Python</b>.</li>
                <li>Extracted the <b>JSON</b> coming from <b>Web-Socket Server</b> in human readable and interacting interface.</li>
                <li>Divided the software into 3 common modules, Schedule, Equipment & Map Module for Web-Interface & Mobile App and 1 extra Web-Socket Service Module only for the App.</li>
                <li>Implemented <b>Service</b> in Android to keep <b>Web-Socket Client</b> always running in background in the app even when the app is minimized or closed to get push notification, required for equipment status details and new beacon alert.</li>
                <li>Created <b>MySQL database</b> to store login credentials for the Mobile App & built its <b>back-end files</b> on <b>PHP</b>.</li>
                <li><b>Technologies:</b> Android Studio, Java, JavaScript, Python, PHP, MySQL, jQuery</li>
                <li>Ranked in the <b>top 2%</b> among the students handled by my project guide and received a <b>Letter of Recommendation</b> from her.</li>
            </ul>
        `
    },
    "oxyvin_intern.html": {
        "title": "Software Development Intern",
        "content": `<div class="floatRight">Nov 2018 – Jan 2019</div><a href="https://oxyvin.com" target="_blank" class="title_a">Oxyvin Technologies (OPC) Pvt Ltd - Bangalore, India</a><br /><br />
            <ul>
                <li>Worked on <b>CodeIgniter</b> framework for <b>MVC Architectural</b> Application Development.</li>
                <li>Developed Technical, Auditor, Planning, Manage & Customer Module of the software.</li>
                <li>Divided different forms in different steps to be followed in chronological order in each modules.</li>
                <li>Created tables of each form of each module in <b>MySQL database</b> and used different forms of <b>Normalization</b> to store filled forms data in more structured form.</li>
                <li>Used <b>AJAX</b> to implement multiple number of input type tag in HTML and to perform database actions asynchronously.</li>
                <li>Worked on the security aspects of the application to prevent cookie manipulation, SQL injection.</li>
                <li><b>Technologies:</b> CodeIgniter, PHP, MySQL, jQuery, JavaScript, AJAX, Bootstrap </li>
            </ul>
        `
    },
    "ngcn_intern.html": {
        "title": "Software Development Intern",
        "content": `<div class="floatRight">May 2018 – July 2018</div><a href="http://ngcn.co.uk/" target="_blank" class="title_a">NGCN Infosolutions Pvt Ltd - Remote, India</a> <br /> <br />
            <ul>
                <li>Developed an <b>ERP Software</b> used for <b>Billing and Inventory</b> purpose with facilities like Multi Branch, Multi User and can handle Inventory, Purchases, Stock, Billing, Reports, etc.</b></li>
                <li>Created a <b>Single Page Application</b> using <b>AJAX</b> where different pages for different tasks of the user loads without refreshing or redirecting to any other page.</li>
                <li>Used <b>AJAX</b> to perform all the task in background to minimize slow loading and to prevent loading of same UI again and again which results in improvement of speed of the application.</li>
                <li><b>Technologies:</b> PHP, jQuery, JavaScript, AJAX, MySQL</li>
                <li>Received a <b>Return Offer</b> and <b>Recommendation</b> on LinkedIn Profile for completing the project much earlier than the assigned time period and outstanding performance during the internship.</li>
            </ul>
        `
    },
    "catchfreedeal.html": {
        "title": "Full Stack Web Development Intern",
        "content": `<div class="floatRight">Dec 2017</div><a href="http://www.catchfreedeal.com" target="_blank" class="title_a">CatchFreeDeal - Remote, India</a><br /><br />
            <ul>
                <li>Developed a complete website from scratch which displays best deals & coupons from different e-commerce website like amazon, flipkart, jabong, etc.</li>
                <li>Created database to store different deals and coupons data as per preference of the logged user.</li>
                <li>Implemented user authentication feature (login, logout, register) from scratch using PHP and MySQL database and used <b>facebook API</b> to give login feature from facebook.</li>
                <li><b>Technologies:</b> PHP, jQuery, JavaScript, AJAX, MySQL, Bootstrap</li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/internshipCatchFreeDeal">https://github.com/adityasuman2025/internshipCatchFreeDeal</a></li>
            </ul>
        `
    },

    "btp.html": {
        "title": "B.Tech Project",
        "content": '<ul><li>Developed a smartphone based Android App used as a handy and portable setup for measuring <b>surface tension</b> of a fluid by <b>pendant drop method</b> under Dr. Subrata Kumar, Associate Associate, Department of Mechanical Engineering, IIT Patna.</li><li>The developed App captures the image of the pendant drop, <b>detects the edge</b> of the drop, <b>extracts the drop profile</b>, <b>generates equations</b> of the drop profile and uses various <b>formulas and equations</b> on the drop profile to calculate surface tension.</li><li>We read a few research papers published by various researchers working in this field to gain an insight into the working of the current equipment being used in the industry and labs and also the equations and solutions.</li><li><b>Graded 9/10 in this final year project and received positive feedback from my project guide.</b></li><li><b>Technologies:</b> Java, Android Studio, OpenCV library</li><li><b>Project Report:</b> <a target="_blank" href="https://drive.google.com/file/d/1gHsq6At8fUT_P14GbYScGrf9526F2ejb/view?usp=sharing">Report</a></li><li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/BTP">https://github.com/adityasuman2025/BTP</a></li></ul>'
    },
    "feedback_module.html": {
        "title": "FeedBack Module IIT Patna",
        "content": '<ul><li>A Web Application for IIT Patna where students can submit feedback of courses taught by profs.</b></li><li><b>This has been hosted on the college website and final year students have filled the feedback using this module. The module reported no bugs and students have responded positively</b> </li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>'
    },
    "gate_security_app.html": {
        "title": "Gate Security App IIT Patna",
        "content": '<ul><li>Developed a Gate Security App for main gates of IIT Patna Campus based on QR Code.</li><li>Used zxing library of Java and enabled mobile phone camera to scan QR code of person.</li><li>Created <b>Back-end files</b> on <b>PHP</b> to verify person\'s QR code and mark person\'s entry in database</li><li><b>It is successfully implemented and is in use in IIT Patna.</b> </li><li><b>Technologies:</b> Android Studio, Java, PHP, MySQL, JavaScript, jQuery, Bootstrap, Zxing library</li><li><b>10,000+</b> total scans and 400+ unique scans has been reported in a span of <b>3 months</b> and had <b>Media Coverage</b> of the project, its functionality and impact of the App in <b>2 newspapers</b> of Patna.<ul><li><a target="_blank" href="https://drive.google.com/file/d/1b5uDG3Hq3SRds0013zmB4fLd1xG5tnsF/view?usp=sharing">Dainik Bhaskar</a></li><li><a target="_blank" href="https://drive.google.com/file/d/1z2E2lDXd2I3MJ9ctly2OFKzq1FpQh7kp/view?usp=sharing">Hindustan</a></li></ul></li></ul>'
    },
    "key_issue_app.html": {
        "title": "Key Issue App IIT Patna",
        "content": '<ul><li>Developed a Key Issue & Return App for the rooms and labs of IIT Patna based on QR Code, under pic automation, <b>Dr. Mayank Agrawal.</b></li><li>Used zxing library of Java and enabled mobile phone camera to scan QR code of the keys & person.</li><li>Created <b>Back-end files</b> on <b>PHP</b> to verify and check QR Code data and get issued keys history, not returned keys list and issuing person details from database.</li><li><b>It is successfully implemented and is in use in IIT Patna.</b> </li><li><b>Technologies:</b> Android Studio, Java, PHP, MySQL, Zxing library</li></ul>',
    },
    "thesis_module.html": {
        "title": "Thesis Upload IIT Patna",
        "content": '<ul><li>A Web Application for IITP where B.Tech, M.Tech, Ph.D students can upload their thesis to professors.</b></li><li>In this Application student can write and edit their thesis details and <b>upload PDF</b> of the thesis and certificate and can send request to their mentors for its approval.</li><li>Professors and Admin can see list of students who has submitted their thesis and can accept <b>approval request</b> too.</li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>',
    },
    "acad_result.html": {
        "title": "Academic Result IIT Patna",
        "content": '<ul><li>A Web Application for IITP where students can see results of their attended semester exams. Earlier the academic results were intranet based only. So students outside campus found difficult to share password etc.</b></li><li><b>It is successfully implemented and is used by final year students to see their semester exam result.</b> </li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>',
    },
    "exam_attendance.html": {
        "title": "Exam Attendance IIT Patna",
        "content": "<ul><li>A Web Application for IITP to generate attendance file/pdf of students with their photos for a exam.</b></li><li>In this Application a photo-based attendance is generated (like JEE). So even if a student forgets his/her ID Card, the photo is available on the attendance sheet during exams.</li><li><b>Technologies:</b> PHP, MySQL, tcpdf, JavaScript, jQuery, AJAX, Bootstrap</li></ul>"
    },
    "pdf_module.html": {
        "title": "PDF Module IIT Patna",
        "content": '<ul><li>A Web Application for IIT Patna where professors can monitor their PDF records.</b></li><li><b>Technologies:</b> PHP, MySQL, Python, JavaScript, jQuery, AJAX, Bootstrap</li></ul>',
    },
    "pda_module.html": {
        "title": "PDA Module IIT Patna",
        "content": '<ul><li>A Web Application for IIT Patna where professors can monitor their expenses/PDA.</b></li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>',
    },
    "rs_board.html": {
        "title": "Research Scholar's Board IIT Patna",
        "content": '<ul><li>A comprehensive searchable research scholar\'s notice board. This is for the facilitation of notices relating to APS, Comprehensive, Registration Seminar for Ph.D. Scholars.</li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>',
    },
    "attendance_upload.html": {
        "title": "Attendance Upload IIT Patna",
        "content": '<ul><li>A Web Application for IIT Patna where professors can upload attendance details of students in their courses, and admin/registrar can view the attendance results.</b></li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>',
    },
    "contribute_module.html": {
        "title": "Contribute Module IIT Patna",
        "content": '<ul><li>A Web Application for IITP where profs can choose their contribution options during various emergency or crowd-funding cases.</li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>'
    },
    "noticeboard.html": {
        "title": "Notice Board IIT Patna",
        "content": '<ul><li>Developed a Notice Board Module for IIT Patna under pic automation, <b>Dr. Mayank Agrawal.</b>, where professors and administration can upload notices and students and staffs can open that using the web application</li><li><b>It is successfully implemented and is in use in IIT Patna.</b> </li><li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>'
    },
    "ipr_module.html": {
        "title": "IPR Module IIT Patna",
        "content": '<li>Developed a IPR Module for IIT Patna under pic automation, <b>Dr. Mayank Agrawal</b>. This module can be used for filing <b>IMMOVABLE PROPERTY RETURN</b> by professors and staffs of IIT Patna.</li><li>Used <b>fpdf</b> library of PHP for generating digital pdf of the filed IPR, that can be printed and saved for later use.</li><li><b>It is successfully implemented and is in use in IIT Patna.</b> </li><li><b>Technologies:</b> PHP, fpdf, MySQL, jQuery, AJAX, Bootstrap</li></ul>'
    },
    "forms_module.html": {
        "title": "Forms Module IIT Patna",
        "content": '<ul><li>A Web Application for IITP where Professors/Admin can maintain their form records.</b></li>        <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li></ul>'
    },
    "wifi_attend.html": {
        "title": "Wi-Fi Based Attendance App",
        "content": '<ul><li>Developed an attendance system App using <b>Wi-Fi technology</b> of smartphone. A student can mark his attendance by connecting his phone to the hotspot created by professor’s phone. </li><li>Achieved this by implementing <b>Socket Client</b> in the <b>student version</b> of the App and <b>Socket Server</b> in the <b>professor version</b>. </li><li>Used <b>Socket Programming</b> techniques to let the the socket communicate with each other at a particular <b>IP & PORT</b> using Wi-Fi Network. </li><li>Implemented <b>SharedPreferences</b> in Android to store and retrieve data of the student and let the student mark their attendance even when they don’t have internet connection.</li><li>Used Back-end files written in PHP to let the App communicate with server to get and send data to database.</li><li><b>Technologies:</b> Android Studio, Java, Socket, PHP, MySQL </li><li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/WifiAttendance">https://github.com/adityasuman2025/WifiAttendance</a></li></ul>'
    },
    "calc.html": {
        "title": "Calculator App",
        "content": '<ul><li>Implemented <b>Infix to Postfix</b> conversion algorithm and stacks data structure in Java to develop a standard calculator in Android.</li><li>Also implemented different string functions to extract data in useful form from the entered calculation statements in the App.</li><li>Developed this as a semester project for course <b>CS382</b> at IIT Patna. </li><li><b>Technologies:</b> Java, Android Studio</li><li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoCalc">https://github.com/adityasuman2025/MNgoCalc</a></li></ul>'
    },

    "react_image_annotate_npm_package.html": {
        "title": "React Image Annotate NPM Package",
        "content": `
            <ul>
                <li>Created a npm package/react library using which user can annotate/markup/write over any image.</li>
                <li>Annotations of all type are supported like <b>any shape/image, text, hand drawing,</b> etc.</li>
                <li>One can add <b>annotation feature</b> in their project by installing the package in their react/javascript project.</li>
                <li><b>Technologies:</b> TypeScript, JavaScript, React.js, TailwindCSS</li>

                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoImageAnnotate">https://github.com/adityasuman2025/MNgoImageAnnotate</a></li>
            </ul>
        `
    },
    "text_editor_npm_package.html": {
        "title": "Text Editor NPM Package",
        "content": `
            <ul>
                <li>Created a npm package/library and a personalized stylesheet to memic the design of <b>Sublime Text Editor</b>.</li>
                <li>One can easily create his <b>web profile</b> by installing the package in their react/javascript project</li>
                <li>Implemented this library to develop my <a target="_blank" href="https://adityasuman.mngo.in">web profile.</a></li>
                <li><b>Technologies:</b> TypeScript, JavaScript, React.js</li>

                <li></li>
                <li><b>Demo:</b> <a target="_blank" href="https://adityas.site">https://adityas.site</a></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoTextEditor">https://github.com/adityasuman2025/MNgoTextEditor</a></li>
            </ul>
        `
    },
    "quiz_web_app.html": {
        "title": "Quiz Web App",
        "content": `
            <ul>
                <li>Developed a <b>Quiz Web App</b> that can be used to practice frequently asked interview questions.</li>
                <li>A web application designed for practicing common and <b>well-known interview questions</b> across various topics. Users can engage in quiz sessions to prepare for interviews and enhance their learning by tackling frequently asked questions.</li>
                <li>This platform serves as a valuable resource for honing <b>interview skills</b> and gaining proficiency in diverse subject areas.</li>
                <li><b>Technologies:</b> TypeScript, JavaScript, React.js, TailwindCSS</li>

                <li></li>
                <li><b>Demo:</b> <a target="_blank" href="https://quiz.adityas.site">https://quiz.adityas.site</a></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoQuiz">https://github.com/adityasuman2025/MNgoQuiz</a></li>
            </ul>
        `
    },
    "chat_web_app.html": {
        "title": "Chat Web App",
        "content": `
            <ul>
                <li>Developed a A <b>Real-time Chatting Web App & PWA</b> with awesome look, super fast and smooth messaging feature and other cool features. One can connect with any of the users registered on the app and can send them message.</li>
                <li>It supports <a>Text, Image & Video</a> message and call and have <a>Offline Support</a> too.</li>
                <li>Used <b>Firebase Realtime Database</b> as database and <b>Firebase Storage</b> to store multimedia messages (images) and <a>AES Encryption</a> algorithms for encrypting messages.</li>
                <li>Implemented <b>Offline Support</b> using <a>localStorage</a> and used <a>WebRTC</a> & google stun servers for video calls</li>
                <li><b>Technologies:</b> JavaScript, React.js, Redux, PWA, Firebase, WebRTC</li>
            </ul>
        `
    },
    "qr_mobile_app.html": {
        "title": "QR Mobile App",
        "content": '<ul><li>An App to create any custom QR code and read any QR code.</li><li>Implemented Zxing Java library in Android to <b>decode</b> scanned QR code from smartphone camera and to generate QR Code Image from any text.</li><li><b>Technologies:</b> Android Studio, Java, Zxing library</li><li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoQR">https://github.com/adityasuman2025/MNgoQR</a></li></ul>'
    },
    "anwesha_2k18.html": {
        "title": "Anwesha 2k18 Website’s Front-end",
        "content": '<ul><li>Implemented mousewheel.js to scroll the website <b>horizontally</b> and used jQuery features like mouse location, on scroll, image location coordinates, AJAX, etc to create a <b>unique design</b> of the website.</li><li>Got <b>positive review</b> from other college fest’s web developers over the UI & design of the site.</li><li><b>Technologies:</b>  jQuery, mousewheel.js, AJAX, HTML, CSS</li><li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/Anwesha18">https://github.com/adityasuman2025/Anwesha18</a></li></ul>'
    },
    "iitp_motor.html": {
        "title": "IITP Motorsports Website",
        "content": '<ul><li>Built a complete website from scratch using HTML, CSS, PHP and MySQL.</li><li>Used AJAX to send mail to website administrator and contacting person in background without reloading or redirecting to any page.</li><li><b>Technologies:</b> PHP, MySQL, jQuery, AJAX, jquery-ui.js, jquery.bxslider.js, HTML, CSS </li><li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/IITPMotorsports">https://github.com/adityasuman2025/IITPMotorsports</a></li></ul>'
    },

    "achievements.html": {
        "title": "Achievements",
        "content": `
            <ul>
                <li><a>Systematic Ventures: </a><b>Owned and built the main product</b> of the company. Integrated <b>Cursor & agentic coding workflows</b> across Dev, PRD & Code Review which <b>reduced feature delivery man-days by 50%</b>, and <b>Simplify Signup & Easy Onboarding sped up the signup process by 2x</b>.</li>

                <li><a>Byjus: </a>Subjective Assessment Revamp <b>saved</b> our infra cost by almost <b>50%</b> and Signup Flow Improv. in BEP <b>increased</b> the chance of signup by <b>40%</b>.</li>
                
                <li><a target="_blank">Web Vital Score: </a>Have scored <b>95+</b> in Web Performance of all my personal Web Projects.</li>
                
                <li><a target="_blank">Internship at ISRO: </a>Recieved Letter of Recommendation and ranked among <b>top 2% students</b> worked under <b>S. Santhalakshmi, Scientist ‘SF’ & Manager SDG, ISTRAC-ISRO.</b></li>
                
                <li><a target="_blank">Internship at NGCN: </a>Recieved <b>Return Offer & Recommendation</b> on LinkedIn Profile from <b>Justin Sebastian, CEO of NGCN, Oxyvin.</b></li>
                
                <li><a target="_blank">Automation IIT Patna: </a>Assigned back-to-back <b>12 projects</b> from <b>Dr. Mayank Agrawal</b>, PIC Automation, IIT Patna, in a duration of <b>6 months</b>, January 2020 to June 2020.</li>
                
                <li><a target="_blank">Professors of IIT Patna: </a>Got <b>Letter of Recommendation</b> from <b>Dr. Jimson Mathew, Head of Department (HOD),</b> CSE Dept., IIT Patna and <b>Letter of Appreciation</b> from <b>Dr. Mayank Agrawal, Assistant Professor,</b> CSE Dept., IIT Patna.</li>
                
                <li>
                    <a target="_blank" href="https://drive.google.com/drive/folders/1_JJX7Pq5mKsyYMf2v3r8dHQROriULJPF?usp=share_link">Gate Security App for IIT Patna: </a><b>5M+</b> total scans and <b>10k+</b> unique scans have been reported till date, and had <b>Media Coverage</b> of the project and its impact (specially during covid) in <b>2 newspapers</b> of Patna.
                    <ul>
                        <li><a target="_blank" href="https://drive.google.com/drive/folders/1_JJX7Pq5mKsyYMf2v3r8dHQROriULJPF?usp=share_link">Dainik Bhaskar</a></li>
                        <li><a target="_blank">Hindustan</a></li>
                    </ul>
                </li>
                
                <li><a>Feedback Module for IIT Patna: </a>This module has been hosted on the college website and <b>all UG and PG students</b> had filled their course feedback using this module. The module reported <b>no bugs</b> and students have responded <b>positively.</b></li>
                
                <li><a>B.Tech Final Year Project (BTP): </a>Graded <b>9/10</b> in my final year project and received positive feedback from my project guide.</li>
                
                <li><a target="_blank">Key Issue App for IIT Patna: </a>This app resulted in faster issuing and returning of keys which prevents queue and saves everyone’s time. <b>17,000+</b> keys of labs and rooms of different blocks of IIT Patna have been issued and returned till date.</li>
                
                <li><a>Billing & Inventory ERP Software: </a><b>8,000+</b> invoices and quotations have been generated till date using software developed by me, during my internship at <b>NGCN.</b></li>
                
                <li><a>Anwesha 2k18 Website: </a>Used by <b>3,500+</b> peoples to register in the biggest cultural fest of North India held at IIT Patna in 2018.</li>

                <li><a>JEE Main: </a>Secured <b>99.17 percentile</b> out of 12,07,058 candidates appeared in JEE Main 2016. </li>

                <li><a>All India Secondary School Examination: </a>Scored a <b>10 CGPA</b> in Secondary School Examination 2014 (Class 10) conducted by CBSE.</li>
            </ul>
        `
    },
    "skills_n_intr.html": {
        "title": "Skills & Interests",
        "content": `
            <ul>
                <li><b>Primary Skills:</b> JavaScript, TypeScript, React.js, Next.js, Node.js, Tailwind CSS, Redux, Redux-Saga, HTML, CSS, Python</li>
                <li><b>Secondary Skills:</b> Java, React Native, jQuery, GraphQL, REST API, WebSockets, Firebase, MySQL, MongoDB, express.js, socket.io, kafka, Bootstrap</li>
                <li><b>Tools:</b> Cursor, Git, Vercel, Netlify, Posthog, Datadog, GTM, Figma, Notion, Asana, Github, Gitlab, Jira, Confluence, Claude Code, AWS, Android Studio, Heroku, cPanel, Google Cloud Platform</li>
                <li><b>Operating System:</b> Linux, Mac OS, Windows</li>
                <li><b>Soft Skills:</b> Async Collaboration, End-to-End Ownership, Problem Solving, Cross-functional Teamwork, Team Coordination, Leadership</li>
            </ul>`
    },
    "por.html": {
        "title": "Position Of Responsibility",
        "content": '<ul><li>Former Coordinator, Design Club, IIT Patna <div class="floatRight">2017 - 2019</div></li><li>Former Team Member, <a href="http://www.iitpmotorsports.in" target="_blank">IITP Motorsports</a> <div class="floatRight">2016 - 2018</div></li><li>Former Web & App Team Sub-Coordinator, <a href="https://anwesha.info" target="_blank">Anwesha 2018, IIT Patna</a> <div class="floatRight">2017 - 2018</div></li><li>Former Web Master, <a href="http://www.eclubiitp.org" target="_blank">Entrepreneurship Club, IIT Patna</a><div class="floatRight">2017 - 2018</div></li></ul>'
    },
    "resume.html": {
        "title": "Resume",
        "content": '<div style="text-align: center;"><a class="resumeBtn" target="_blank" href="https://drive.google.com/file/d/1LqXZ4zlcoT_hm1QKgUxqbF_zzRHQEq68/view?usp=sharing">Download Resume</a></div>'
    },
    "follow_me.html": {
        "title": "Follow Me",
        "content": '<ul><li>instagram: <a href="https://www.instagram.com/the_sociology_king" target="_blank">https://www.instagram.com/the_sociology_king</a></li></ul>'
    },
    "info.html": {
        "title": "Info",
        "content": `
            <div>
                @adityasuman profile<br />
                <b>version:</b> ${packageJson.version}<br />
                <b>latest release:</b> 20 June 2026<br />
                <b>first release:</b> 15 March 2017<br />
                <b>developer:</b> Aditya Suman<br />
                <b>contact:</b> adityasuman2025@gmail.com<br>
                <b>technologies used:</b> TypeScript, JavaScript, React.js<br />
                <b>NPM Package:</b> <a href="https://www.npmjs.com/package/mngo-text-editor" target="_blank">https://www.npmjs.com/package/mngo-text-editor</a><br />
                <b>declaration:</b> owner declares 100% hand-written code and no use of any other library in creation of MNgoTextEditor. This library owns the name of "MNgo Text Editor" and is a open-source software under MIT license.<br /><br />
                &copy 2017-26 This property belongs to Aditya Suman
            </div>
        `
    },
}

function App() {
    return (
        <MNgoTextEditor
            title={"adityasuman"}
            typeWriterFileKey={"about_me.html"}
            resumeFileKey={"resume.html"}
            files={FILES}
            filesContent={FILES_CONTENT}
        />
    )
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
