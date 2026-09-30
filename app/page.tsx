import { MNgoTextEditor, FileNode } from "../library/dist/index.js";
// import { MNgoTextEditor, FileNode } from "../library/src";

const FILES: Record<string, FileNode> = {
    // Root folder
    adityasuman: {
        type: "folder",
        id: "adityasuman",
        defaultOpen: true,
        parentId: null,
        childrenIds: [
            "about_me.html",
            "contact_me.html",
            "education.html",
            "work_experience",
            "academic_projects",
            "other_projects",
            "achievements.html",
            "skills_n_intr.html",
            "por.html",
            "resume.html",
            "follow_me.html",
            "info.html",
        ],
    },

    // Direct items under adityasuman
    "about_me.html": { type: "file", id: "about_me.html", parentId: "adityasuman" },
    "contact_me.html": { type: "file", id: "contact_me.html", parentId: "adityasuman" },
    "education.html": { type: "file", id: "education.html", parentId: "adityasuman" },

    // Work Experience
    work_experience: {
        type: "folder",
        id: "work_experience",
        parentId: "adityasuman",
        childrenIds: [
            "systematic_fte.html",
            "byjus_fte.html",
            "mlcertific_intern.html",
            "upbringo_intern.html",
            "isro_intern.html",
            "oxyvin_intern.html",
            "ngcn_intern.html",
            "catchfreedeal.html",
        ],
    },
    "systematic_fte.html": { type: "file", id: "systematic_fte.html", parentId: "work_experience" },
    "byjus_fte.html": { type: "file", id: "byjus_fte.html", parentId: "work_experience" },
    "mlcertific_intern.html": { type: "file", id: "mlcertific_intern.html", parentId: "work_experience" },
    "upbringo_intern.html": { type: "file", id: "upbringo_intern.html", parentId: "work_experience" },
    "isro_intern.html": { type: "file", id: "isro_intern.html", parentId: "work_experience" },
    "oxyvin_intern.html": { type: "file", id: "oxyvin_intern.html", parentId: "work_experience" },
    "ngcn_intern.html": { type: "file", id: "ngcn_intern.html", parentId: "work_experience" },
    "catchfreedeal.html": { type: "file", id: "catchfreedeal.html", parentId: "work_experience" },

    // Academic Projects
    academic_projects: {
        type: "folder",
        id: "academic_projects",
        parentId: "adityasuman",
        childrenIds: [
            "btp.html",
            "feedback_module.html",
            "gate_security_app.html",
            "key_issue_app.html",
            "thesis_module.html",
            "acad_result.html",
            "exam_attendance.html",
            "pdf_module.html",
            "pda_module.html",
            "rs_board.html",
            "attendance_upload.html",
            "contribute_module.html",
            "noticeboard.html",
            "ipr_module.html",
            "forms_module.html",
            "wifi_attend.html",
            "calc.html",
        ],
    },
    "btp.html": { type: "file", id: "btp.html", parentId: "academic_projects" },
    "feedback_module.html": { type: "file", id: "feedback_module.html", parentId: "academic_projects" },
    "gate_security_app.html": { type: "file", id: "gate_security_app.html", parentId: "academic_projects" },
    "key_issue_app.html": { type: "file", id: "key_issue_app.html", parentId: "academic_projects" },
    "thesis_module.html": { type: "file", id: "thesis_module.html", parentId: "academic_projects" },
    "acad_result.html": { type: "file", id: "acad_result.html", parentId: "academic_projects" },
    "exam_attendance.html": { type: "file", id: "exam_attendance.html", parentId: "academic_projects" },
    "pdf_module.html": { type: "file", id: "pdf_module.html", parentId: "academic_projects" },
    "pda_module.html": { type: "file", id: "pda_module.html", parentId: "academic_projects" },
    "rs_board.html": { type: "file", id: "rs_board.html", parentId: "academic_projects" },
    "attendance_upload.html": { type: "file", id: "attendance_upload.html", parentId: "academic_projects" },
    "contribute_module.html": { type: "file", id: "contribute_module.html", parentId: "academic_projects" },
    "noticeboard.html": { type: "file", id: "noticeboard.html", parentId: "academic_projects" },
    "ipr_module.html": { type: "file", id: "ipr_module.html", parentId: "academic_projects" },
    "forms_module.html": { type: "file", id: "forms_module.html", parentId: "academic_projects" },
    "wifi_attend.html": { type: "file", id: "wifi_attend.html", parentId: "academic_projects" },
    "calc.html": { type: "file", id: "calc.html", parentId: "academic_projects" },

    // Other Projects
    other_projects: {
        type: "folder",
        id: "other_projects",
        parentId: "adityasuman",
        childrenIds: [
            "interview_prep_web_app.html",
            "machine_coding_interview_questions.html",
            "react_image_annotate_npm_package.html",
            "text_editor_npm_package.html",
            "secure_pdf_viewer_npm_package.html",
            "chat_web_app.html",
            "qr_mobile_app.html",
            "anwesha_2k18.html",
            "iitp_motor.html",
        ],
    },
    "interview_prep_web_app.html": { type: "file", id: "interview_prep_web_app.html", parentId: "other_projects" },
    "machine_coding_interview_questions.html": { type: "file", id: "machine_coding_interview_questions.html", parentId: "other_projects" },
    "text_editor_npm_package.html": { type: "file", id: "text_editor_npm_package.html", parentId: "other_projects" },
    "react_image_annotate_npm_package.html": { type: "file", id: "react_image_annotate_npm_package.html", parentId: "other_projects" },
    "secure_pdf_viewer_npm_package.html": { type: "file", id: "secure_pdf_viewer_npm_package.html", parentId: "other_projects" },
    "chat_web_app.html": { type: "file", id: "chat_web_app.html", parentId: "other_projects" },
    "qr_mobile_app.html": { type: "file", id: "qr_mobile_app.html", parentId: "other_projects" },
    "anwesha_2k18.html": { type: "file", id: "anwesha_2k18.html", parentId: "other_projects" },
    "iitp_motor.html": { type: "file", id: "iitp_motor.html", parentId: "other_projects" },

    // Additional direct items under adityasuman
    "achievements.html": { type: "file", id: "achievements.html", parentId: "adityasuman" },
    "skills_n_intr.html": { type: "file", id: "skills_n_intr.html", parentId: "adityasuman" },
    "por.html": { type: "file", id: "por.html", parentId: "adityasuman" },
    "resume.html": { type: "file", id: "resume.html", parentId: "adityasuman" },
    "follow_me.html": { type: "file", id: "follow_me.html", parentId: "adityasuman" },
    "info.html": { type: "file", id: "info.html", parentId: "adityasuman" },
};

const FILES_CONTENT = {
    "home.html": {
        "title": "Home",
        "content": `
            <i>&bull; Brief About Me</i><br/>
            I am a passionate <a>Senior Frontend & Full Stack Engineer</a> with <a>6+ years</a> of experience crafting high-performance web applications. I graduated from <a>IIT Patna</a> and specialize in building scalable frontend architectures and backend APIs.<br/><br/>

            <i>&bull; Why Hire Me?</i><br/>
            <ul>
                <li><b>End-to-End Ownership</b>: Extensive experience building & owning complete frontend and end-to-end features (frontend UI components + backend APIs) from technical scoping to production release across different time zones.</li>
                <li><b>AI-Accelerated Workflows</b>: Highly proficient in utilizing modern agentic developer tools (Cursor, Antigravity) to fast-track technical planning, development, testing & code review.</li>
                <li><b>Performant & Modular Engineering</b>: Deep expertise in crafting scalable, optimal, modular, and extensible code using custom hooks, HOCs, and state stores. Expertly apply performance optimization techniques (lazy/dynamic loading, preventing unnecessary re-renders, debounce, throttling, memoization) and improve user experience via API caching, keyboard accessibility, perceptive skeleton loaders, pagination, and deprioritizing non-critical scripts.</li>
                <li><b>Business Impact & Infra Cost</b>: Proven ability to design solutions that cut infrastructure overhead, minimize performance spikes, maintain 95+ Web Vital scores, and boost user retention & satisfaction.</li>
            </ul>
            <br/>

            <i>&bull; Tech Stack</i><br/>
            <ul>
                <li><b>Frontend</b>: React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Zustand, Tanstack React Query, Redux, HTML5/CSS3</li>
                <li><b>Backend & Databases</b>: Node.js, Express, MongoDB, SQL, MySQL, REST API, WebSockets, Firebase</li>
                <li><b>Tools & OS</b>: Cursor, Git, Vercel, Netlify, Figma</li>
            </ul>
            <br/>

            <i>&bull; Featured Projects & Open Source</i><br/>
            <ul>
                <li><b>MNgo Interview Prep</b> (<a target="_blank" href="https://interview.adityas.site">interview.adityas.site</a>): A 100% free interview practice platform featuring <b>500+ real-world questions</b> and timed quiz simulations to help engineers build speed, reduce anxiety, and land top tech roles without costly paywalls.</li>
                <li><b>MNgo Image Annotator</b> (<a target="_blank" href="https://annotate.adityas.site">annotate.adityas.site</a> | <a target="_blank" href="https://www.npmjs.com/package/react-image-annotate-mngo">NPM</a>): An open-source React library that lets users draw, add notes, and place custom shapes/icons directly on images, making bug reporting, design reviews, and diagramming quick and painless.</li>
                <li><b>MNgo Text Editor</b> (<a target="_blank" href="https://adityas.site">adityas.site</a> | <a target="_blank" href="https://www.npmjs.com/package/mngo-text-editor">NPM</a>): An open-source React component library that turns developer portfolios and resumes into an authentic, interactive Sublime Text-styled interface with tabs, file tree explorer, and typewriter compilation effects.</li>
            </ul>
            <br/>

            <i>&bull; Strengths & Soft Skills</i><br/>
            <ul>
                <li><b>Ownership</b>: High accountability for code quality, technical planning, and feature delivery from scoping to production.</li>
                <li><b>Collaboration</b>: Exceptional asynchronous communication skills for distributed global teams.</li>
                <li><b>Cross-functional Teamwork</b>: Seamless collaboration with product managers, designers, and engineering peers to build technical solutions.</li>
                <li><b>Adaptability</b>: Fast learner of new paradigms, architectures, and automated dev tools.</li>
            </ul>`
    },

    "about_me.html": {
        "title": "About Me",
        "content": `Hi There, I am <a>Aditya Suman</a> from India.<br/>
            I'm a <b>Senior Frontend Engineer</b> with <a>6+ years</a> of experience in building scalable & high-performance web applications utilising <b>JavaScript, TypeScript, React, and Next.js</b> as my core tech stack.<br/>
            I graduated from <b>IIT Patna</b> in 2020.<br/><br/>

            <ul>
                <li>I currently work remotely for a <b>US-based startup</b> where I independently build, own, and scale the entire frontend. So I am highly comfortable with <a>asynchronous collaboration</a>, independent problem-solving, and delivering high-quality code <a>across different time zones</a>. I directly collaborate with US-based stakeholders to translate their business requirements into scalable technical solutions, owning the complete feature delivery from scoping to production release.</li>
                <li>I also have experience in working with modern development cycles using <b>agentic coding tools like Cursor, Antigravity</b>. Be it from PRD Technical Planning, development to code reviews, which significantly <a>reduces feature delivery timeline</a> and improved code standards & maintainability.</li>
                <li>In my previous company, I co-led an architecture to convert a legacy infrastructure into a <b>modular React SDK</b>, that <a>reduced our infrastructure costs by around 50%</a>. I am deeply passionate about web performance and always target a <b>Web Vital Score of 95+</b> across my projects because you know fast software drives user retention.</li>
            </ul>
            <br>
            I'm looking for my next challenge in a fast-paced, product-driven environment where I can be part of frontend initiatives and collaborate with high-performing teams. Looking forward to discussing how I can add value to your team.`
    },
    "contact_me.html": {
        "title": "Contact Me",
        "content": `<b>Homepage: </b><a target="_blank" href="https://adityas.site">https://adityas.site</a><br>
            <b>Email: </b><a href="mailto:adityasuman2025@gmail.com">adityasuman2025@gmail.com</a>, <a href="mailto:aditya.me16@iitp.ac.in">aditya.me16@iitp.ac.in</a><br>
            <b>Phone: </b><a href="tel:+917424947945">+91-7424947945</a><br>
            <b>LinkedIn: </b> <a target="_blank" href="https://www.linkedin.com/in/adityasuman2025">https://www.linkedin.com/in/adityasuman2025</a><br>
            <b>GitHub: </b> <a target="_blank" href="https://github.com/adityasuman2025">https://github.com/adityasuman2025</a>`
    },
    "education.html": {
        "title": "Education",
        "content": `<ul>
                <li>Bachelor Of Technology, <b>Indian Institute of Technology Patna (IIT P),</b> CPI- 7.08/10 (2016 - 2020)</li>
                <li>Senior Secondary Schooling, <b>Magadh University</b> – 70.4% (2014 - 2016)</li>
                <li>Secondary Schooling, CBSE, <b>R.P.S Public School, Bihar Sharif,</b> CGPA- 10/10 (2013 - 2014)</li>
            </ul>`
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
                <li><b>Technologies:</b> React.js, Next.js, Node.js, MongoDB, JavaScript, TypeScript, REST API, Posthog, Netlify, Cursor</li>
            </ul>`
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
                <li><b>Technologies:</b> React.js, Node.js, MongoDB, Next.js, JavaScript, TypeScript, Tailwind CSS, Redux, Redux-Saga, REST API, WebSockets,Firebase, socket, vercel, AWS, etc</li>
            </ul>`
    },
    "mlcertific_intern.html": {
        "title": "Full-Stack Web Development Intern",
        "content": `<div class="floatRight">July 2020</div><a href="https://mlcertific.com" target="_blank" class="title_a">MLCertific - Remote, India</a><br /><br />
            <ul>
                <li>Worked as a <b>Web Developer</b> to develop a Certification Website.</li>
                <li>Developed the complete website on React and created its api on PHP</li>
                <li>Website contains features like user\'s cart, razorpay payment, online exam/test, certificate generation, validation and sharing</li>
                <li><b>Technologies:</b> React.js, PHP, MySQL, Bootstrap</li>
            </ul>`
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
            </ul>`
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
            </ul>`
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
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/internshipOxyvin">https://github.com/adityasuman2025/internshipOxyvin</a></li>
            </ul>`
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
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/internshipNGCN">https://github.com/adityasuman2025/internshipNGCN</a></li>
            </ul>`
    },
    "catchfreedeal.html": {
        "title": "Full Stack Web Development Intern",
        "content": `<div class="floatRight">Dec 2017</div><a href="http://www.catchfreedeal.com" target="_blank" class="title_a">CatchFreeDeal - Remote, India</a><br /><br />
            <ul>
                <li>Developed a complete website from scratch which displays best deals & coupons from different e-commerce website like amazon, flipkart, jabong, etc.</li>
                <li>Created database to store different deals and coupons data as per preference of the logged user.</li>
                <li>Implemented user authentication feature (login, logout, register) from scratch using PHP and MySQL database and used <b>facebook API</b> to give login feature from facebook.</li>
                <li><b>Technologies:</b> PHP, jQuery, JavaScript, AJAX, MySQL, Bootstrap</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/internshipCatchFreeDeal">https://github.com/adityasuman2025/internshipCatchFreeDeal</a></li>
            </ul>`
    },

    "btp.html": {
        "title": "B.Tech Project",
        "content": `<ul>
                <li>Developed a smartphone based Android App used as a handy and portable setup for measuring <b>surface tension</b> of a fluid by <b>pendant drop method</b> under Dr. Subrata Kumar, Associate Associate, Department of Mechanical Engineering, IIT Patna.</li>
                <li>The developed App captures the image of the pendant drop, <b>detects the edge</b> of the drop, <b>extracts the drop profile</b>, <b>generates equations</b> of the drop profile and uses various <b>formulas and equations</b> on the drop profile to calculate surface tension.</li>
                <li>We read a few research papers published by various researchers working in this field to gain an insight into the working of the current equipment being used in the industry and labs and also the equations and solutions.</li>
                <li><b>Graded 9/10 in this final year project and received positive feedback from my project guide.</b></li>
                <li><b>Technologies:</b> Java, Android Studio, OpenCV library</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/BTP">https://github.com/adityasuman2025/BTP</a></li>
            </ul>`
    },
    "feedback_module.html": {
        "title": "FeedBack Module IIT Patna",
        "content": `<ul>
                <li>A Web Application for IIT Patna where students can submit feedback of courses taught by profs.</li>
                <li><b>This has been hosted on the college website and final year students have filled the feedback using this module. The module reported no bugs and students have responded positively</b></li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "gate_security_app.html": {
        "title": "Gate Security App IIT Patna",
        "content": `<ul>
                <li>Developed a Gate Security App for main gates of IIT Patna Campus based on QR Code.</li>
                <li>Used zxing library of Java and enabled mobile phone camera to scan QR code of person.</li>
                <li>Created <b>Back-end files</b> on <b>PHP</b> to verify person's QR code and mark person's entry in database</li>
                <li><b>It is successfully implemented and is in use in IIT Patna.</b></li>
                <li><b>Technologies:</b> Android Studio, Java, PHP, MySQL, JavaScript, jQuery, Bootstrap, Zxing library</li>
                <li><b>10,000+</b> total scans and 400+ unique scans has been reported in a span of <b>3 months</b> and had <b>Media Coverage</b> of the project, its functionality and impact of the App in <b>2 newspapers</b> of Patna.
                    <ul>
                        <li><a target="_blank" href="https://drive.google.com/drive/folders/1_JJX7Pq5mKsyYMf2v3r8dHQROriULJPF?usp=share_link">Dainik Bhaskar</a></li>
                        <li><a target="_blank" href="https://drive.google.com/drive/folders/1_JJX7Pq5mKsyYMf2v3r8dHQROriULJPF?usp=share_link">Hindustan</a></li>
                    </ul>
                </li>
            </ul>`
    },
    "key_issue_app.html": {
        "title": "Key Issue App IIT Patna",
        "content": `<ul>
                <li>Developed a Key Issue & Return App for the rooms and labs of IIT Patna based on QR Code, under pic automation, <b>Dr. Mayank Agrawal.</b></li>
                <li>Used zxing library of Java and enabled mobile phone camera to scan QR code of the keys & person.</li>
                <li>Created <b>Back-end files</b> on <b>PHP</b> to verify and check QR Code data and get issued keys history, not returned keys list and issuing person details from database.</li>
                <li><b>It is successfully implemented and is in use in IIT Patna.</b></li>
                <li><b>Technologies:</b> Android Studio, Java, PHP, MySQL, Zxing library</li>
            </ul>`
    },
    "thesis_module.html": {
        "title": "Thesis Upload IIT Patna",
        "content": `<ul>
                <li>A Web Application for IITP where B.Tech, M.Tech, Ph.D students can upload their thesis to professors.</li>
                <li>In this Application student can write and edit their thesis details and <b>upload PDF</b> of the thesis and certificate and can send request to their mentors for its approval.</li>
                <li>Professors and Admin can see list of students who has submitted their thesis and can accept <b>approval request</b> too.</li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/uploadIITP">https://github.com/adityasuman2025/uploadIITP</a></li>
            </ul>`
    },
    "acad_result.html": {
        "title": "Academic Result IIT Patna",
        "content": `<ul>
                <li>A Web Application for IITP where students can see results of their attended semester exams. Earlier the academic results were intranet based only. So students outside campus found difficult to share password etc.</li>
                <li><b>It is successfully implemented and is used by final year students to see their semester exam result.</b></li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "exam_attendance.html": {
        "title": "Exam Attendance IIT Patna",
        "content": `<ul>
                <li>A Web Application for IITP to generate attendance file/pdf of students with their photos for a exam.</li>
                <li>In this Application a photo-based attendance is generated (like JEE). So even if a student forgets his/her ID Card, the photo is available on the attendance sheet during exams.</li>
                <li><b>Technologies:</b> PHP, MySQL, tcpdf, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "pdf_module.html": {
        "title": "PDF Module IIT Patna",
        "content": `<ul>
                <li>A Web Application for IIT Patna where professors can monitor their PDF records.</li>
                <li><b>Technologies:</b> PHP, MySQL, Python, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "pda_module.html": {
        "title": "PDA Module IIT Patna",
        "content": `<ul>
                <li>A Web Application for IIT Patna where professors can monitor their expenses/PDA.</li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "rs_board.html": {
        "title": "Research Scholar's Board IIT Patna",
        "content": `<ul>
                <li>A comprehensive searchable research scholar's notice board. This is for the facilitation of notices relating to APS, Comprehensive, Registration Seminar for Ph.D. Scholars.</li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "attendance_upload.html": {
        "title": "Attendance Upload IIT Patna",
        "content": `<ul>
                <li>A Web Application for IIT Patna where professors can upload attendance details of students in their courses, and admin/registrar can view the attendance results.</li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "contribute_module.html": {
        "title": "Contribute Module IIT Patna",
        "content": `<ul>
                <li>A Web Application for IITP where profs can choose their contribution options during various emergency or crowd-funding cases.</li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "noticeboard.html": {
        "title": "Notice Board IIT Patna",
        "content": `<ul>
                <li>Developed a Notice Board Module for IIT Patna under pic automation, <b>Dr. Mayank Agrawal.</b>, where professors and administration can upload notices and students and staffs can open that using the web application</li>
                <li><b>It is successfully implemented and is in use in IIT Patna.</b></li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "ipr_module.html": {
        "title": "IPR Module IIT Patna",
        "content": `<ul>
                <li>Developed a IPR Module for IIT Patna under pic automation, <b>Dr. Mayank Agrawal</b>. This module can be used for filing <b>IMMOVABLE PROPERTY RETURN</b> by professors and staffs of IIT Patna.</li>
                <li>Used <b>fpdf</b> library of PHP for generating digital pdf of the filed IPR, that can be printed and saved for later use.</li>
                <li><b>It is successfully implemented and is in use in IIT Patna.</b></li>
                <li><b>Technologies:</b> PHP, fpdf, MySQL, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "forms_module.html": {
        "title": "Forms Module IIT Patna",
        "content": `<ul>
                <li>A Web Application for IITP where Professors/Admin can maintain their form records.</li>
                <li><b>Technologies:</b> PHP, MySQL, JavaScript, jQuery, AJAX, Bootstrap</li>
            </ul>`
    },
    "wifi_attend.html": {
        "title": "Wi-Fi Based Attendance App",
        "content": `<ul>
                <li>Developed an attendance system App using <b>Wi-Fi technology</b> of smartphone. A student can mark his attendance by connecting his phone to the hotspot created by professor’s phone.</li>
                <li>Achieved this by implementing <b>Socket Client</b> in the <b>student version</b> of the App and <b>Socket Server</b> in the <b>professor version</b>.</li>
                <li>Used <b>Socket Programming</b> techniques to let the the socket communicate with each other at a particular <b>IP & PORT</b> using Wi-Fi Network.</li>
                <li>Implemented <b>SharedPreferences</b> in Android to store and retrieve data of the student and let the student mark their attendance even when they don’t have internet connection.</li>
                <li>Used Back-end files written in PHP to let the App communicate with server to get and send data to database.</li>
                <li><b>Technologies:</b> Android Studio, Java, Socket, PHP, MySQL</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/WifiAttendance">https://github.com/adityasuman2025/WifiAttendance</a></li>
            </ul>`
    },
    "calc.html": {
        "title": "Calculator App",
        "content": `<ul>
                <li>Implemented <b>Infix to Postfix</b> conversion algorithm and stacks data structure in Java to develop a standard calculator in Android.</li>
                <li>Also implemented different string functions to extract data in useful form from the entered calculation statements in the App.</li>
                <li>Developed this as a semester project for course <b>CS382</b> at IIT Patna.</li>
                <li><b>Technologies:</b> Java, Android Studio</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoCalc">https://github.com/adityasuman2025/MNgoCalc</a></li>
            </ul>`
    },

    "react_image_annotate_npm_package.html": {
        "title": "React Image Annotate NPM Package",
        "content": `<ul>
                <li>Created and published <b>react-image-annotate-mngo</b>, a high-performance, plug-and-play React library that lets users draw, type notes, and highlight diagrams directly on any image or screenshot.</li>
                <li><b>The Problem It Solves:</b> Reviewing designs, explaining bug reports, and drawing technical workflows usually requires expensive third-party tools or external screenshot software. This library allows any web app to embed an interactive, full-featured image markup studio in seconds.</li>
                <li><b>Key Features & Capabilities:</b>
                    <ul>
                        <li><b>Easy Drawing & Text:</b> Smooth freehand sketching with a digital pen and click-anywhere text boxes to leave clear notes and feedback directly on images.</li>
                        <li><b>Intuitive Controls:</b> Freely rotate items 360°, resize from corners, drag to reposition, or quickly duplicate using standard keyboard shortcuts (<code>Ctrl+C</code> / <code>Ctrl+V</code>).</li>
                        <li><b>Mistake-Proof Editing:</b> Full 30-step Undo and Redo (<code>Ctrl+Z</code> / <code>Ctrl+Y</code>) so users can experiment freely without fear of losing their edits.</li>
                    </ul>
                </li>
                <li><b>Engineering Highlights & Real-World Impact:</b>
                    <ul>
                        <li><b>Buttery-Smooth 60/120 FPS Performance:</b> Uses direct graphics acceleration during drag, resize, and rotation gestures, completely bypassing slow screen recalculations. The result is fluid, zero-lag movement even on low-end laptops or smartphones.</li>
                        <li><b>Pinpoint Accuracy Across All Screens:</b> Automatically calculates dynamic scale factors so annotations stay perfectly aligned to image details whether viewed on a 4K desktop monitor, laptop, or mobile screen.</li>
                        <li><b>Smart Hybrid Rendering:</b> Combines high-frequency canvas drawing for natural digital pen strokes with native interactive elements for selectable, editable text and shapes.</li>
                        <li><b>Universal Touch & Stylus Support:</b> Works seamlessly across mouse, trackpad, touchscreen, and digital styluses (like Apple Pencil) with unified gesture detection.</li>
                        <li><b>Zero Input Delay with Fine-Grained Updates:</b> Moving or editing one single label doesn't refresh the rest of the canvas, keeping the application snappy even with dozens of active annotations.</li>
                        <li><b>Effortless Plug-and-Play Integration:</b> Synchronizes data two-way with the host application and supports view-only (readonly) modes for flexible integration into audit logs, QA dashboards, and form builders.</li>
                    </ul>
                </li>
                <li><b>Technologies:</b> React.js, TypeScript, JavaScript, TailwindCSS, useSyncExternalStore</li>
                <li></li>
                <li><b>Demo:</b> <a target="_blank" href="https://annotate.adityas.site">https://annotate.adityas.site</a></li>
                <li><b>NPM Package:</b> <a target="_blank" href="https://www.npmjs.com/package/react-image-annotate-mngo">https://www.npmjs.com/package/react-image-annotate-mngo</a></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoImageAnnotate">https://github.com/adityasuman2025/MNgoImageAnnotate</a></li>
            </ul>`
    },
    "secure_pdf_viewer_npm_package.html": {
        "title": "React Secure PDF Viewer NPM Package",
        "content": `<ul>
                <li>A secure PDF viewer component for React that helps protect PDF content from copy, print, and save operations.</li>
                <li>Enables customized watermarks, custom toolbars, and password-protected PDF handling.</li>
                <li><b>Technologies:</b> TypeScript, JavaScript, React.js, PDF.js</li>
                <li></li>
                <li><b>NPM Package:</b> <a target="_blank" href="https://www.npmjs.com/package/react-secure-pdf-viewer-mngo">https://www.npmjs.com/package/react-secure-pdf-viewer-mngo</a></li>
            </ul>`
    },
    "text_editor_npm_package.html": {
        "title": "Text Editor NPM Package",
        "content": `<ul>
                <li>Created and published <b>mngo-text-editor</b>, an open-source React component library that enables developers to present their web portfolio and resume inside an interactive, authentic <b>Sublime Text Editor</b> interface.</li>
                <li><b>The Problem It Solves:</b> Most developer portfolio websites look generic or require building complex desktop-like navigation and file trees from scratch. This library provides a ready-made, eye-catching theme that immediately resonates with tech recruiters and engineering managers.</li>
                <li><b>Key Features & Capabilities:</b>
                    <ul>
                        <li><b>Authentic Code Editor Look & Feel:</b> Complete with native window controls, draggable tabs, line numbers, and dark theme aesthetics true to Sublime Text.</li>
                        <li><b>Interactive File & Folder Tree:</b> A fast, hierarchical explorer supporting nested folders, keyboard navigation, and instant file switching.</li>
                        <li><b>Animated Typewriter Effect:</b> Built-in typewriter animation that simulates live code compilation upon opening the profile.</li>
                        <li><b>Zero Configuration & Auto-Injected Styles:</b> Works straight out of the box with zero CSS setup or build tooling adjustments required by the consumer app.</li>
                    </ul>
                </li>
                <li><b>Real-World Impact:</b> Powers this personal portfolio (<a target="_blank" href="https://adityas.site">adityas.site</a>) and empowers other engineers to build and deploy distinctive, memorable portfolio websites on NPM with just a few lines of code.</li>
                <li><b>Technologies:</b> React.js, TypeScript, JavaScript, CSS3</li>
                <li></li>
                <li><b>Demo:</b> <a target="_blank" href="https://adityas.site">https://adityas.site</a></li>
                <li><b>NPM Package:</b> <a target="_blank" href="https://www.npmjs.com/package/mngo-text-editor">https://www.npmjs.com/package/mngo-text-editor</a></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoTextEditor">https://github.com/adityasuman2025/MNgoTextEditor</a></li>
            </ul>`
    },
    "machine_coding_interview_questions.html": {
        "title": "Machine Coding Interview Questions",
        "content": `<ul>
                <li>A curated collection of frontend <b>machine coding interview questions</b> frequently asked in top tech companies.</li>
                <li>Features interactive components, step-by-step implementations, and optimized frontend designs.</li>
                <li><b>Technologies:</b> TypeScript, JavaScript, Vanilla JS, React.js, CSS</li>
                <li></li>
                <li><b>Demo:</b> <a target="_blank" href="https://machine-coding.adityas.site">https://machine-coding.adityas.site</a></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/machineCoding">https://github.com/adityasuman2025/machineCoding</a></li>
            </ul>`
    },
    "interview_prep_web_app.html": {
        "title": "Interview Prep Web App",
        "content": `<ul>
                <li>Created <b>MNgo Interview Prep</b>, a high-performance, fullstack preparation platform designed to help software engineers confidently practice and crack technical interviews at top tech companies and startups.</li>
                <li><b>The Problem It Solves:</b> Quality interview preparation is often locked behind steep monthly paywalls, scattered across confusing blogs, or focused purely on theory rather than real interview questions asked by top hiring teams.</li>
                <li><b>Key Features & Capabilities:</b>
                    <ul>
                        <li><b>500+ Curated Real-World Questions:</b> Covers 11+ high-demand areas—from JavaScript, React internals, and Data Structures to Web Performance, Security, and System Design—complete with practical answers, code snippets, and common interviewer follow-up questions.</li>
                        <li><b>Dual Practice & Timed Quiz Modes:</b> Learn at your own pace with in-depth explanations in Practice Mode, or simulate real-world high-pressure interviews with a live countdown timer in Quiz Mode to build speed and reduce test anxiety.</li>
                        <li><b>Smart Progress Tracking:</b> Visually tracks questions answered and topics completed, making it easy for candidates to spot weak areas and focus their preparation time where it matters most.</li>
                        <li><b>Distraction-Free Experience:</b> Clean mobile-responsive layout, Dark/Light theme toggle for late-night study sessions, and 1-click Google login.</li>
                    </ul>
                </li>
                <li><b>Engineering Highlights & Real-World Impact:</b>
                    <ul>
                        <li><b>Instant Navigation with Smart Data Caching:</b> Implemented client-side caching and background data sync (TanStack Query + Async Storage), allowing learners to jump between questions and topics with zero delay or loading spinners—even on slow network connections.</li>
                        <li><b>Decoupled Fullstack Microservices:</b> Separated the user authentication service from the interview content engine on the backend, ensuring high platform availability, fast database queries, and zero downtime during high-traffic interview seasons.</li>
                        <li><b>Bite-Sized Fast Delivery:</b> Utilizes paginated API retrieval so the browser downloads lightweight question batches on demand rather than forcing a heavy upfront data load, saving user mobile data and keeping interaction instantaneous.</li>
                        <li><b>Frictionless One-Click Access:</b> Seamless Google OAuth integration and secure cookie sessions eliminate tedious sign-up forms, letting users jump straight into learning while saving their solved history.</li>
                        <li><b>100% Free Forever:</b> Eliminates costly $30-$50/month subscription barriers, leveling the playing field for developers from all backgrounds to land top-tier tech jobs.</li>
                    </ul>
                </li>
                <li><b>Technologies:</b> Next.js, React.js, TypeScript, TailwindCSS, TanStack Query, Node.js, Express.js, MongoDB, Redis, JWT, Google OAuth</li>
                <li></li>
                <li><b>Demo:</b> <a target="_blank" href="https://interview.adityas.site">https://interview.adityas.site</a></li>
                <li><b>Frontend Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoInterviewPrep">https://github.com/adityasuman2025/MNgoInterviewPrep</a></li>
                <li><b>Backend Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoInterviewPrepBackend">https://github.com/adityasuman2025/MNgoInterviewPrepBackend</a></li>
            </ul>`
    },
    "chat_web_app.html": {
        "title": "Chat Web App",
        "content": `<ul>
                <li>Developed a A <b>Real-time Chatting Web App & PWA</b> with awesome look, super fast and smooth messaging feature and other cool features. One can connect with any of the users registered on the app and can send them message.</li>
                <li>It supports <a>Text, Image & Video</a> message and call and have <a>Offline Support</a> too.</li>
                <li>Used <b>Firebase Realtime Database</b> as database and <b>Firebase Storage</b> to store multimedia messages (images) and <a>AES Encryption</a> algorithms for encrypting messages.</li>
                <li>Implemented <b>Offline Support</b> using <a>localStorage</a> and used <a>WebRTC</a> & google stun servers for video calls</li>
                <li><b>Technologies:</b> JavaScript, React.js, Redux, PWA, Firebase, WebRTC</li>
            </ul>`
    },
    "qr_mobile_app.html": {
        "title": "QR Mobile App",
        "content": `<ul>
                <li>An App to create any custom QR code and read any QR code.</li>
                <li>Implemented Zxing Java library in Android to <b>decode</b> scanned QR code from smartphone camera and to generate QR Code Image from any text.</li>
                <li><b>Technologies:</b> Android Studio, Java, Zxing library</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/MNgoQR">https://github.com/adityasuman2025/MNgoQR</a></li>
            </ul>`
    },
    "anwesha_2k18.html": {
        "title": "Anwesha 2k18 Website’s Front-end",
        "content": `<ul>
                <li>Implemented mousewheel.js to scroll the website <b>horizontally</b> and used jQuery features like mouse location, on scroll, image location coordinates, AJAX, etc to create a <b>unique design</b> of the website.</li>
                <li>Got <b>positive review</b> from other college fest’s web developers over the UI & design of the site.</li>
                <li><b>Technologies:</b>  jQuery, mousewheel.js, AJAX, HTML, CSS</li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/Anwesha18">https://github.com/adityasuman2025/Anwesha18</a></li>
            </ul>`
    },
    "iitp_motor.html": {
        "title": "IITP Motorsports Website",
        "content": `<ul>
                <li>Built a complete website from scratch using HTML, CSS, PHP and MySQL.</li>
                <li>Used AJAX to send mail to website administrator and contacting person in background without reloading or redirecting to any page.</li>
                <li><b>Technologies:</b> PHP, MySQL, jQuery, AJAX, jquery-ui.js, jquery.bxslider.js, HTML, CSS </li>
                <li></li>
                <li><b>GitHub Repository:</b> <a target="_blank" href="https://github.com/adityasuman2025/IITPMotorsports">https://github.com/adityasuman2025/IITPMotorsports</a></li>
            </ul>`
    },

    "achievements.html": {
        "title": "Achievements",
        "content": `<ul>
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
                        <li><a target="_blank" href="https://drive.google.com/drive/folders/1_JJX7Pq5mKsyYMf2v3r8dHQROriULJPF?usp=share_link">Hindustan</a></li>
                    </ul>
                </li>
                
                <li><a>Feedback Module for IIT Patna: </a>This module has been hosted on the college website and <b>all UG and PG students</b> had filled their course feedback using this module. The module reported <b>no bugs</b> and students have responded <b>positively.</b></li>
                
                <li><a>B.Tech Final Year Project (BTP): </a>Graded <b>9/10</b> in my final year project and received positive feedback from my project guide.</li>
                
                <li><a target="_blank">Key Issue App for IIT Patna: </a>This app resulted in faster issuing and returning of keys which prevents queue and saves everyone’s time. <b>17,000+</b> keys of labs and rooms of different blocks of IIT Patna have been issued and returned till date.</li>
                
                <li><a>Billing & Inventory ERP Software: </a><b>8,000+</b> invoices and quotations have been generated till date using software developed by me, during my internship at <b>NGCN.</b></li>
                
                <li><a>Anwesha 2k18 Website: </a>Used by <b>3,500+</b> peoples to register in the biggest cultural fest of North India held at IIT Patna in 2018.</li>

                <li><a>JEE Main: </a>Secured <b>99.17 percentile</b> out of 12,07,058 candidates appeared in JEE Main 2016. </li>

                <li><a>All India Secondary School Examination: </a>Scored a <b>10 CGPA</b> in Secondary School Examination 2014 (Class 10) conducted by CBSE.</li>
            </ul>`
    },
    "skills_n_intr.html": {
        "title": "Skills & Interests",
        "content": `<ul>
                <li><b>Primary Skills:</b> JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, Tailwind CSS, TanStack Query, Zustand, Redux, HTML, CSS, Redis, Python</li>
                <li><b>Secondary Skills:</b> React Native, jQuery, GraphQL, REST API, WebSockets, Firebase, MySQL, MongoDB, socket.io, kafka, Java, Bootstrap</li>
                <li><b>Tools:</b> Cursor, Git, Vercel, Netlify, Posthog, Datadog, GTM, Figma, Notion, Asana, Github, Gitlab, Jira, Confluence, Claude Code, AWS, Android Studio, Heroku, Google Cloud Platform</li>
                <li><b>Operating System:</b> Linux, Mac OS, Windows</li>
                <li><b>Soft Skills:</b> Async Collaboration, End-to-End Ownership, Problem Solving, Cross-functional Teamwork, Team Coordination, Leadership</li>
            </ul>`
    },
    "por.html": {
        "title": "Position Of Responsibility",
        "content": `<ul>
                <li>Former Coordinator, Design Club, IIT Patna <div class="floatRight">2017 - 2019</div></li>
                <li>Former Team Member, <a href="http://www.iitpmotorsports.in" target="_blank">IITP Motorsports</a> <div class="floatRight">2016 - 2018</div></li>
                <li>Former Web & App Team Sub-Coordinator, <a href="https://anwesha.info" target="_blank">Anwesha 2018, IIT Patna</a> <div class="floatRight">2017 - 2018</div></li>
                <li>Former Web Master, <a href="http://www.eclubiitp.org" target="_blank">Entrepreneurship Club, IIT Patna</a><div class="floatRight">2017 - 2018</div></li>
            </ul>`
    },
    "resume.html": {
        "title": "Resume",
        "content": `<div style="text-align: center;">
                <a class="resumeBtn" target="_blank" href="https://drive.google.com/file/d/188SFndXm2iyIWWGCpGAIh1K_Gh37O8nb/view?usp=share_link">Download Resume</a>
            </div>`
    },
    "follow_me.html": {
        "title": "Follow Me",
        "content": `<ul>
                <li>instagram: <a href="https://www.instagram.com/the_sociology_king" target="_blank">https://www.instagram.com/the_sociology_king</a></li>
            </ul>`
    },
    "info.html": {
        "title": "Info",
        "content": `<div>
                @adityasuman profile<br />
                <b>version:</b> 3.x.x<br />
                <b>latest release:</b> 20 June 2026<br />
                <b>first release:</b> 15 March 2017<br />
                <b>developer:</b> Aditya Suman<br />
                <b>contact:</b> adityasuman2025@gmail.com<br>
                <b>technologies used:</b> TypeScript, JavaScript, React.js<br />
                <b>NPM Package:</b> <a href="https://www.npmjs.com/package/mngo-text-editor" target="_blank">https://www.npmjs.com/package/mngo-text-editor</a><br />
                <b>declaration:</b> owner declares 100% hand-written code and no use of any other library in creation of MNgoTextEditor. This library owns the name of "MNgo Text Editor" and is a open-source software under MIT license.<br /><br />
                &copy 2017-26 This property belongs to Aditya Suman
            </div>`
    },
}

export default function App() {
    return (
        <MNgoTextEditor
            title={"adityasuman"}
            typeWriterFileKey={"home.html"}
            resumeFileKey={"resume.html"}
            files={FILES}
            filesContent={FILES_CONTENT}
        />
    )
};
