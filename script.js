/* * HELLO THERE, CURIOUS DEVELOPER!
         * * If you are reading this via Inspect Element, welcome behind the scenes!
         * * PLEASE NOTE:
         * This entire website was built in a SINGLE DAY using vanilla HTML, CSS, and JS.
         * It is a simple, lightweight solution for our batch and is NOT meant to be 
         * a complex engineering marvel (yet).
         * * FUTURE PLANS:
         * I will be migrating this project to a robust REACT + NODE.JS architecture 
         * with a proper database backend soon.
         * * Until then, please don't judge the spaghetti code too harshly! 😉
         * * Regards,
         * Sayan Maity
         */
// --- GLOBAL SETTINGS ---
const LAST_UPDATED = "7 FEB 2026, 11:40 PM ";

// 1. Subjects Data
        const subjectsData = [
            {name:"Basic Electrical and Electronics",code: "ES-EE101",hiddenId: "bee_301",icon: "fa-bolt"},
            {name:"Physics 1",code: "BS-PH101",             hiddenId: "ph_302",icon: "fa-magnet"},
            {name:"Biology For Engineer",code: "ES-BT101",    hiddenId: "be_301",icon: "fa-dna"},
            {name:"Mathematics I",code: "BS-M101",          hiddenId: "math_301",icon: "fa-calculator" },
            {name:"Basic Electrical - Electronics Lab",code: "ES-EE191",hiddenId: "bee_302",icon: "fa-plug"},
            {name:"Physics Labaratory", code:"BS-PH191",    hiddenId:"ph_301",icon:"fa-flask"},
            {name:"Mechanical Workshop",code:"ES-ME191",    hiddenId:"me_301",icon:"fa-wrench"},
            {name:"Syllabus",code:"Syllabus",hiddenId:"syllabus",icon:"fa-book-open"}
        ];

        // 2. Documents/PDFs Data (ADDED 'date' FIELD)
        const resourcesData = [
           { title: "Practice Set 1", subjectId: "math_301", type: "important", date: "2026-01-15", link: "pdf/MPS1.pdf" },
           { title: "Practice Set 2", subjectId: "math_301", type: "important", date: "2026-01-15", link: "pdf/MPS2.pdf" },
           { title: "Practice Set 3", subjectId: "math_301", type: "important", date: "2026-01- 15", link: "pdf/MPS3.pdf" },
           { title: "Practice Set 4", subjectId: "math_301", type: "important", date: "2026-01-15", link: "pdf/MPS4.pdf" },
           { title: "Module 1 & 2", subjectId: "math_301", type: "general", date: "2026-01-15", link: "pdf/MR12.pdf"},
           { title: "Module 3 & 4", subjectId: "math_301", type: "general", date: "2026-01-15", link: "pdf/MR34.pdf"},
           { title: "Module 5", subjectId: "math_301", type: "general", date: "2026-01-15", link: "pdf/MR5.pdf"},
           { title: "Practice Set 1 & 2", subjectId: "ph_302", type: "important", date: "2026-01-15", link: "pdf/PPS12.pdf"},
           { title: "Practice Set 4 & 5", subjectId: "ph_302", type: "important", date: "2026-01-15", link: "pdf/PPS45.pdf"},
           { title: "Textbook 1", subjectId: "ph_302", type: "general", date: "2026-01-15", link: "pdf/PRT.pdf"},
           { title: "Textbook 2", subjectId: "ph_302", type: "general", date: "2026-01-15", link: "pdf/PRT2.pdf"},
           { title: "Electrical Practice Set", subjectId: "bee_301", type: "important", date: "2026-01-15", link: "pdf/Electrical Practice Set.pdf"},
           { title: "Electronics Practice Set", subjectId: "bee_301", type: "important", date: "2026-01-15", link: "pdf/Electronics Practice set.pdf"},
           { title: "Textbook 1", subjectId: "bee_301", type: "general", date: "2026-01-16", link: "pdf/ERT1.pdf"},
           { title: "Textbook 2", subjectId: "bee_301", type: "general", date: "2026-01-16", link: "pdf/ERT2.pdf"},
           { title: "Practice Set 1", subjectId: "be_301", type: "important", date: "2026-01-18", link: "pdf/BFEPS1.pdf"},
           { title: "Practice Set 2", subjectId: "be_301", type: "important", date: "2026-01-18", link: "pdf/BFEPS2.pdf"},
           { title: "Lab Manual", subjectId: "me_301", type: "general", date: "2026-01-19", link: "pdf/Lab Manual.pdf"},
           { title: "BS-M 101 practice set 5", subjectId: "math_301", type: "important", date: "2026-01-19", link: "pdf/MPS5.pdf"},
           { title: "Common Syllabus", subjectId: "syllabus", type: "general", date: "2026-01-20", link:"pdf/CLG SYLB.pdf"},
           { title: "Dielectric notes 📝", subjectId: "ph_302", type: "general", date: "2026-01-21", link: "pdf/Dielectric notes  - Sathi Mondal.pdf"}

        ];

        // 3. Notices Data
        const noticesData = [
            { title: "Class Routine", date: "2026-01-14", 
                content: "Class Routine of Electrical Engineering Batch 2 for First semester.", 
                attachmentType: "image", attachmentLink: "images/Rotuine.jpeg" },
            {  title: "Payment for Second Semister", date: "2026-01-15", 
                content: "Haldia Institute of Technology (Circular No. HIT/CIR//2026, dated January 13, 2026) has issued a circular regarding the registration and payment of fees for 1st and 2nd year B.Tech, M.Tech, MCA & MBA students for the 2nd and 4th semesters (p. 1). Students are required to log in to http://student.hithaldia.org from January 15 to January 28, 2026, to submit their fees online (p. 1). Please note that direct payment to the institute's bank account via NEFT, mobile banking, or other e-banking modes will not be accepted (p. 1). Students must have their fees submitted to attend classes and activities; a valid enrollment and at least 75% attendance are required to be permitted to appear in the examinations (p. 1).",
                attachmentType: "pdf", attachmentLink: "pdf/CIRCULAR 2ND & 4TH SEMESTER FEES 2026.pdf"} ,
            {  title: "NPTEL Registration", date:"2026-01-18",
                content:"Attention all students: NPTEL classes for the upcoming semester are scheduled to begin on Monday, January 19, 2026. Please be advised that the final date for course enrollment is Monday, January 26, 2026, and the last date to register for exams is Monday, February 9, 2026. You are encouraged to enroll in your preferred courses at your earliest convenience via the official SWAYAM-NPTEL portal.",
            } ,
            {   title: "Odd Semister Exam Fees", date:"2026-01-20",
                content:"All 1st Year 1st Semester UG/PG students (except MCA) under Autonomy are hereby informed that the End Semester (Odd) Examination Form Fill-up for the academic session 2025-26 will be available online from January 20, 2026 (2:00 PM) via the examination portals hitexam.net / hit.ucanapply.com. Students must submit the examination form and pay the prescribed fee of ₹2000 online within the stipulated timeline. The last date for form submission and fee payment is January 28, 2026, followed by verification by the institute. Admit cards are tentatively scheduled to be generated on January 31, 2026. Students are advised to follow the instructions carefully and check the examination portal regularly for updates.",
                attachmentType: "pdf", attachmentLink: "pdf/Autonomy Circular-Form Fill-up (Odd)'2025-26-1st. Sem (UG&PG - Except MCA).pdf"
            }       
            
        ];

        // 4. Sample Teachers Data
        const teachersData = [
            { name: "Apurba Saha", role: "Mentor" },
            { name: "Biswajit Dalai", role: "Mentor" },
            { name: "Gargi Jana" , role : "Mentor"}
                       
        ];

        // 5. Contributors Data
        const contributorsData = [
            { name: "Sayan Maity", uploads: 12 },
            { name: "Sayantan Bhowmik", uploads: 1 },
            { name: "Sathi Mondal 🌻", uploads: 1},
            { name: "Sougata Pradhan", uploads: 1},
        
        ];

        // 6. Donation Data
    const donationData = [
        { name: "Sayan Maity", amount: 10 },
        { name: "Sayantan Bhowmik", amount: 28 },
        { name: "Sayan Parua", amount: 25},


    ];

        // --- RENDER LOGIC ---

        function init() {
            renderHeaderDate();
            renderSubjects();
            renderNotices();
            renderStats();
            renderTeachers();
            renderHomeLatest(); 
            renderContributors();
            renderDonators();// <--- NEW FUNCTION CALL
        }
        // NEW: Render Donation Leaderboard
    function renderDonators() {
        const container = document.getElementById('donors-list');
        if(!container) return;
        
        container.innerHTML = '';

        // Sort by Amount (High to Low)
        const sorted = [...donationData].sort((a,b) => b.amount - a.amount);

        sorted.forEach((donor, index) => {
            let isTop = index < 3 ? 'top-donor' : '';
            let medal = '';
            
            // Add medals for top 3
            if (index === 0) medal = '🥇 ';
            else if (index === 1) medal = '🥈 ';
            else if (index === 2) medal = '🥉 ';

            container.innerHTML += `
                <div class="donor-card ${isTop}">
                    <div class="donor-badge">${index + 1}</div>
                    <div class="contrib-info">
                        <strong>${medal}${donor.name}</strong>
                        <div style="font-size:0.75rem; color:var(--text-muted)">Student</div>
                    </div>
                    <div class="donor-amount">
                        ₹${donor.amount}
                    </div>
                </div>`;
        });
    }
        // NEW: Render Last Updated Date
function renderHeaderDate() {
    const el = document.getElementById('last-updated-display');
    if(el) el.innerText = "Updated: " + LAST_UPDATED;
}

// Updated: Render Contributors Leaderboard (Shows Everyone)
function renderContributors() {
    const container = document.getElementById('contributors-list');
    if(!container) return;

    container.innerHTML = '';
    // Sort by uploads (High to Low)
    const sorted = [...contributorsData].sort((a,b) => b.uploads - a.uploads);

    sorted.forEach((user, index) => {
        let rankClass = '';
        // Only give Gold/Silver/Bronze badges to top 3
        if (index === 0) rankClass = 'rank-1';
        else if (index === 1) rankClass = 'rank-2';
        else if (index === 2) rankClass = 'rank-3';
        // Everyone else gets the default rank styling (defined in CSS)

        container.innerHTML += `
            <div class="contrib-card">
                <div class="rank-badge ${rankClass}">${index + 1}</div>
                <div class="contrib-info">
                    <strong>${user.name}</strong>
                    <div style="font-size:0.75rem; color:var(--text-muted)">Student</div>
                </div>
                <div class="contrib-count">
                    ${user.uploads} <i class="fas fa-file-upload" style="font-size:0.8rem"></i>
                </div>
            </div>`;
    });
}

        // NEW: Render Home Latest Section
        function renderHomeLatest() {
            // 1. Get Latest 2 Notices
            const sortedNotices = [...noticesData].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
            const noticeContainer = document.getElementById('home-latest-notices');
            noticeContainer.innerHTML = '';
            
            sortedNotices.forEach(n => {
                noticeContainer.innerHTML += `
                    <div class="mini-card notice-type" onclick="switchTab('notices', document.querySelectorAll('.nav-item')[3])">
                        <div class="mini-icon"><i class="fas fa-bell"></i></div>
                        <div class="mini-content">
                            <div class="mini-title">${n.title}</div>
                            <div class="mini-sub">Notice</div>
                        </div>
                        <div class="mini-date">${formatDate(n.date)}</div>
                    </div>`;
            });

            // 2. Get Latest 2 Documents
            const sortedDocs = [...resourcesData].sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
            const docContainer = document.getElementById('home-latest-docs');
            docContainer.innerHTML = '';

            sortedDocs.forEach(d => {
                // Find subject name for context
                const sub = subjectsData.find(s => s.hiddenId === d.subjectId);
                const subName = sub ? sub.name : 'Unknown Subject';

                docContainer.innerHTML += `
                    <div class="mini-card" onclick="openDocContext('${d.subjectId}')">
                        <div class="mini-icon"><i class="fas fa-file-pdf"></i></div>
                        <div class="mini-content">
                            <div class="mini-title">${d.title}</div>
                            <div class="mini-sub">${subName}</div>
                        </div>
                        <div class="mini-date">${formatDate(d.date)}</div>
                    </div>`;
            });
        }

        // Helper: Simple date formatter (e.g., "10 Oct")
        function formatDate(dateString) {
            const options = { month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        // Helper: Jump to document from Home
        function openDocContext(subId) {
            const subject = subjectsData.find(s => s.hiddenId === subId);
            if(subject) {
                // Switch tab visual
                switchTab('documents', document.querySelectorAll('.nav-item')[1]);
                // Open specific subject
                showResources(subject);
            }
        }

        // --- EXISTING FUNCTIONS (Keep these as they were) ---

        function renderSubjects() {
            const container = document.getElementById('subjects-container');
            container.innerHTML = '';
            subjectsData.forEach(sub => {
                const card = document.createElement('div');
                card.className = 'subject-card';
                card.onclick = () => showResources(sub);
                card.innerHTML = `
                    <div class="subject-icon"><i class="fas ${sub.icon}"></i></div>
                    <div class="subject-name">${sub.name}</div>
                    <div class="subject-code">${sub.code}</div>
                `;
                container.appendChild(card);
            });
        }

        function showResources(subject) {
            document.getElementById('subject-view').style.display = 'none';
            document.getElementById('resource-view').style.display = 'block';
            document.getElementById('selected-subject-title').innerText = subject.name;
            document.getElementById('selected-subject-code').innerText = subject.code;
            const list = document.getElementById('resources-list');
            list.innerHTML = '';
            const filteredRes = resourcesData.filter(r => r.subjectId === subject.hiddenId);
            if(filteredRes.length === 0) {
                list.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:20px;">No documents found.</p>`;
                return;
            }
            filteredRes.forEach(res => {
                const isImp = res.type === 'important';
                list.innerHTML += `
                    <div class="resource-card ${isImp ? 'important' : ''}">
                        <div class="res-info">
                            <h4>${res.title}</h4>
                            <span class="res-tag ${isImp ? 'imp' : ''}">${res.type.toUpperCase()}</span>
                        </div>
                        <div class="res-actions">
                            <a href="${res.link}" target="_blank" class="btn-view">View</a>
                            <a href="${res.link}" download class="btn-dl"><i class="fas fa-download"></i></a>
                        </div>
                    </div>`;
            });
        }

        function showSubjects() {
            document.getElementById('resource-view').style.display = 'none';
            document.getElementById('subject-view').style.display = 'block';
        }

        function renderNotices() {
            const container = document.getElementById('notices-container');
            const sortedNotices = noticesData.sort((a,b) => new Date(b.date) - new Date(a.date));
            container.innerHTML = ''; // Clear previous render
            sortedNotices.forEach(notice => {
                let attachmentHTML = '';
                if(notice.attachmentType === 'pdf') {
                    attachmentHTML = `<div class="notice-attachment"><i class="fas fa-file-pdf"></i><span>Attached PDF</span><a href="${notice.attachmentLink}" target="_blank" style="margin-left:auto; color:var(--primary); text-decoration:none;">View</a></div>`;
                } else if (notice.attachmentType === 'image') {
                    attachmentHTML = `<div class="notice-attachment"><i class="fas fa-image"></i><span>Attached Image</span><a href="${notice.attachmentLink}" target="_blank" style="margin-left:auto; color:var(--primary); text-decoration:none;">View</a></div>`;
                }
                container.innerHTML += `
                    <div class="notice-card">
                        <div class="notice-header">
                            <span class="notice-date"><i class="far fa-calendar-alt"></i> ${notice.date}</span>
                            <h4 class="notice-title">${notice.title}</h4>
                        </div>
                        <div class="notice-body">${notice.content}</div>
                        ${attachmentHTML}
                    </div>`;
            });
            document.getElementById('total-notices').innerText = noticesData.length;
        }

        function renderTeachers() {
            const container = document.getElementById('teachers-list');
            container.innerHTML = ''; 
            teachersData.forEach(t => {
                container.innerHTML += `
                    <div class="profile-item">
                        <div class="profile-avatar">${t.name.charAt(0)}</div>
                        <div><strong>${t.name}</strong><div style="font-size:0.8rem; color:var(--text-muted)">${t.role}</div></div>
                    </div>`;
            });
        }

        function renderStats() {
            document.getElementById('total-subjects').innerText = subjectsData.length;
        }

        function switchTab(tabId, navElement) {
            document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            navElement.classList.add('active');
            if(tabId !== 'documents') showSubjects();
            window.scrollTo(0,0);
        }

        window.onload = init;

// --- SECURITY: DISABLE RIGHT CLICK, INSPECT, & FREEZE DEVTOOLS ---
    
    // 1. Disable Right Click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // 2. Disable Keyboard Shortcuts (Ctrl+Shift+I, F12, Ctrl+U, etc.)
    document.onkeydown = function(e) {
        if (
            event.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
            (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
            (e.ctrlKey && e.keyCode === 85) || // Ctrl+U (View Source)
            (e.ctrlKey && e.keyCode === 83)    // Ctrl+S (Save Page)
        ) {
            return false;
        }
    };

    // 3. The "Debugger Trap" (Freezes site if DevTools is opened via Menu)
    setInterval(function() {
        // This function does nothing if DevTools is closed.
        // If DevTools is OPEN, this statement pauses the script execution,
        // making the site unresponsive and hard to inspect.
        debugger; 
    }, 100);

    // 4. Clear Console (Optional: Clears data if they manage to open it)
    setInterval(function() {
        console.clear();
        console.log("%cEEvolution 2.0 Security Enabled", "color: red; font-size: 20px; font-weight: bold;");
    }, 1000);