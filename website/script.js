const projects = [
    // BEGINNER (Days 1-30)
    { day: 1, title: "Personal Portfolio", folder: "BEGINNER/day-01-personal-portfolio", level: "Beginner" },
    { day: 2, title: "Responsive Landing Page", folder: "BEGINNER/day-02-responsive-landing-page", level: "Beginner" },
    { day: 3, title: "Todo List", folder: "BEGINNER/day-03-todo-list", level: "Beginner" },
    { day: 4, title: "Weather App", folder: "BEGINNER/day-04-weather-app", level: "Beginner" },
    { day: 5, title: "Calculator", folder: "BEGINNER/day-05-calculator", level: "Beginner" },
    { day: 6, title: "Quiz App", folder: "BEGINNER/day-06-quiz-app", level: "Beginner" },
    { day: 7, title: "Expense Tracker", folder: "BEGINNER/day-07-expense-tracker", level: "Beginner" },
    { day: 8, title: "Pomodoro Timer", folder: "BEGINNER/day-08-pomodoro-timer", level: "Beginner" },
    { day: 9, title: "Note Taking App", folder: "BEGINNER/day-09-note-taking-app", level: "Beginner" },
    { day: 10, title: "Recipe Book", folder: "BEGINNER/day-10-recipe-book", level: "Beginner" },
    { day: 11, title: "Blog Website", folder: "BEGINNER/day-11-blog-website", level: "Beginner" },
    { day: 12, title: "Ecommerce Product Page", folder: "BEGINNER/day-12-ecommerce-product-page", level: "Beginner" },
    { day: 13, title: "Chat UI", folder: "BEGINNER/day-13-chat-ui", level: "Beginner" },
    { day: 14, title: "Music Player", folder: "BEGINNER/day-14-music-player", level: "Beginner" },
    { day: 15, title: "Drawing App", folder: "BEGINNER/day-15-drawing-app", level: "Beginner" },
    { day: 16, title: "Password Generator", folder: "BEGINNER/day-16-password-generator", level: "Beginner" },
    { day: 17, title: "Unit Converter", folder: "BEGINNER/day-17-unit-converter", level: "Beginner" },
    { day: 18, title: "Countdown Timer", folder: "BEGINNER/day-18-countdown-timer", level: "Beginner" },
    { day: 19, title: "Tip Calculator", folder: "BEGINNER/day-19-tip-calculator", level: "Beginner" },
    { day: 20, title: "QR Code Generator", folder: "BEGINNER/day-20-qr-code-generator", level: "Beginner" },
    { day: 21, title: "Flashcards App", folder: "BEGINNER/day-21-flashcards-app", level: "Beginner" },
    { day: 22, title: "Markdown Previewer", folder: "BEGINNER/day-22-markdown-previewer", level: "Beginner" },
    { day: 23, title: "Currency Converter", folder: "BEGINNER/day-23-currency-converter", level: "Beginner" },
    { day: 24, title: "BMI Calculator", folder: "BEGINNER/day-24-bmi-calculator", level: "Beginner" },
    { day: 25, title: "Random Quote Generator", folder: "BEGINNER/day-25-random-quote-generator", level: "Beginner" },
    { day: 26, title: "Image Gallery", folder: "BEGINNER/day-26-image-gallery", level: "Beginner" },
    { day: 27, title: "Dice Roller", folder: "BEGINNER/day-27-dice-roller", level: "Beginner" },
    { day: 28, title: "Rock Paper Scissors", folder: "BEGINNER/day-28-rock-paper-scissors", level: "Beginner" },
    { day: 29, title: "Memory Game", folder: "BEGINNER/day-29-memory-game", level: "Beginner" },
    { day: 30, title: "Tic Tac Toe", folder: "BEGINNER/day-30-tic-tac-toe", level: "Beginner" },

    // INTERMEDIATE (Days 31-60)
    { day: 31, title: "Job Board", folder: "INTERMEDIATE/day-31-job-board", level: "Intermediate" },
    { day: 32, title: "Social Media Dashboard", folder: "INTERMEDIATE/day-32-social-media-dashboard", level: "Intermediate" },
    { day: 33, title: "Real Estate Website", folder: "INTERMEDIATE/day-33-real-estate-website", level: "Intermediate" },
    { day: 34, title: "Hotel Booking System", folder: "INTERMEDIATE/day-34-hotel-booking-system", level: "Intermediate" },
    { day: 35, title: "Food Delivery App", folder: "INTERMEDIATE/day-35-food-delivery-app", level: "Intermediate" },
    { day: 36, title: "Fitness Tracker", folder: "INTERMEDIATE/day-36-fitness-tracker", level: "Intermediate" },
    { day: 37, title: "Event Management", folder: "INTERMEDIATE/day-37-event-management", level: "Intermediate" },
    { day: 38, title: "Booking Appointment System", folder: "INTERMEDIATE/day-38-booking-appointment-system", level: "Intermediate" },
    { day: 39, title: "Online Learning Platform", folder: "INTERMEDIATE/day-39-online-learning-platform", level: "Intermediate" },
    { day: 40, title: "Movie Database", folder: "INTERMEDIATE/day-40-movie-database", level: "Intermediate" },
    { day: 41, title: "Github Profile Finder", folder: "INTERMEDIATE/day-41-github-profile-finder", level: "Intermediate" },
    { day: 42, title: "Stock Market Tracker", folder: "INTERMEDIATE/day-42-stock-market-tracker", level: "Intermediate" },
    { day: 43, title: "News Aggregator", folder: "INTERMEDIATE/day-43-news-aggregator", level: "Intermediate" },
    { day: 44, title: "Chat Application", folder: "INTERMEDIATE/day-44-chat-application", level: "Intermediate" },
    { day: 45, title: "Project Management Tool", folder: "INTERMEDIATE/day-45-project-management-tool", level: "Intermediate" },
    { day: 46, title: "Ecommerce Cart", folder: "INTERMEDIATE/day-46-ecommerce-cart", level: "Intermediate" },
    { day: 47, title: "Banking Dashboard", folder: "INTERMEDIATE/day-47-banking-dashboard", level: "Intermediate" },
    { day: 48, title: "Flight Booking System", folder: "INTERMEDIATE/day-48-flight-booking-system", level: "Intermediate" },
    { day: 49, title: "Recipe Sharing Platform", folder: "INTERMEDIATE/day-49-recipe-sharing-platform", level: "Intermediate" },
    { day: 50, title: "Blog With CMS", folder: "INTERMEDIATE/day-50-blog-with-cms", level: "Intermediate" },
    { day: 51, title: "Portfolio With Blog", folder: "INTERMEDIATE/day-51-portfolio-with-blog", level: "Intermediate" },
    { day: 52, title: "Task Management Board", folder: "INTERMEDIATE/day-52-task-management-board", level: "Intermediate" },
    { day: 53, title: "File Uploader", folder: "INTERMEDIATE/day-53-file-uploader", level: "Intermediate" },
    { day: 54, title: "Code Editor", folder: "INTERMEDIATE/day-54-code-editor", level: "Intermediate" },
    { day: 55, title: "Voice Notes App", folder: "INTERMEDIATE/day-55-voice-notes-app", level: "Intermediate" },
    { day: 56, title: "Expense Splitter", folder: "INTERMEDIATE/day-56-expense-splitter", level: "Intermediate" },
    { day: 57, title: "Habit Tracker", folder: "INTERMEDIATE/day-57-habit-tracker", level: "Intermediate" },
    { day: 58, title: "Budget Planner", folder: "INTERMEDIATE/day-58-budget-planner", level: "Intermediate" },
    { day: 59, title: "Meal Planner", folder: "INTERMEDIATE/day-59-meal-planner", level: "Intermediate" },
    { day: 60, title: "Travel Planner", folder: "INTERMEDIATE/day-60-travel-planner", level: "Intermediate" },

    // ADVANCED (Days 61-90)
    { day: 61, title: "Fullstack Ecommerce", folder: "ADVANCED/day-61-fullstack-ecommerce", level: "Advanced" },
    { day: 62, title: "Social Network", folder: "ADVANCED/day-62-social-network", level: "Advanced" },
    { day: 63, title: "Video Conferencing", folder: "ADVANCED/day-63-video-conferencing", level: "Advanced" },
    { day: 64, title: "Online Code Editor", folder: "ADVANCED/day-64-online-code-editor", level: "Advanced" },
    { day: 65, title: "Real Time Collaboration", folder: "ADVANCED/day-65-real-time-collaboration", level: "Advanced" },
    { day: 66, title: "Stock Trading Simulator", folder: "ADVANCED/day-66-stock-trading-simulator", level: "Advanced" },
    { day: 67, title: "Multiplayer Game", folder: "ADVANCED/day-67-multiplayer-game", level: "Advanced" },
    { day: 68, title: "AI Chatbot", folder: "ADVANCED/day-68-ai-chatbot", level: "Advanced" },
    { day: 69, title: "Blockchain Explorer", folder: "ADVANCED/day-69-blockchain-explorer", level: "Advanced" },
    { day: 70, title: "Data Visualization Dashboard", folder: "ADVANCED/day-70-data-visualization-dashboard", level: "Advanced" },
    { day: 71, title: "Crypto Wallet", folder: "ADVANCED/day-71-crypto-wallet", level: "Advanced" },
    { day: 72, title: "IOT Dashboard", folder: "ADVANCED/day-72-iot-dashboard", level: "Advanced" },
    { day: 73, title: "Machine Learning UI", folder: "ADVANCED/day-73-machine-learning-ui", level: "Advanced" },
    { day: 74, title: "Voice Assistant", folder: "ADVANCED/day-74-voice-assistant", level: "Advanced" },
    { day: 75, title: "AR Web App", folder: "ADVANCED/day-75-ar-web-app", level: "Advanced" },
    { day: 76, title: "PWA News App", folder: "ADVANCED/day-76-pwa-news-app", level: "Advanced" },
    { day: 77, title: "Real Time Analytics", folder: "ADVANCED/day-77-real-time-analytics", level: "Advanced" },
    { day: 78, title: "Document Editor", folder: "ADVANCED/day-78-document-editor", level: "Advanced" },
    { day: 79, title: "Email Client", folder: "ADVANCED/day-79-email-client", level: "Advanced" },
    { day: 80, title: "Project Management SaaS", folder: "ADVANCED/day-80-project-management-saas", level: "Advanced" },
    { day: 81, title: "Healthcare Portal", folder: "ADVANCED/day-81-healthcare-portal", level: "Advanced" },
    { day: 82, title: "Elearning Platform", folder: "ADVANCED/day-82-elearning-platform", level: "Advanced" },
    { day: 83, title: "Recruitment Platform", folder: "ADVANCED/day-83-recruitment-platform", level: "Advanced" },
    { day: 84, title: "Real Time Chat Support", folder: "ADVANCED/day-84-real-time-chat-support", level: "Advanced" },
    { day: 85, title: "Auction Platform", folder: "ADVANCED/day-85-auction-platform", level: "Advanced" },
    { day: 86, title: "Freelance Marketplace", folder: "ADVANCED/day-86-freelance-marketplace", level: "Advanced" },
    { day: 87, title: "Music Streaming", folder: "ADVANCED/day-87-music-streaming", level: "Advanced" },
    { day: 88, title: "Video Streaming", folder: "ADVANCED/day-88-video-streaming", level: "Advanced" },
    { day: 89, title: "Smart Home Dashboard", folder: "ADVANCED/day-89-smart-home-dashboard", level: "Advanced" },
    { day: 90, title: "Enterprise CRM", folder: "ADVANCED/day-90-enterprise-crm", level: "Advanced" },

    // CAPSTONE (Days 91-100)
    { day: 91, title: "Microservices Project (Part 1)", folder: "CAPSTONE/day-91-92-microservices-project", level: "Capstone" },
    { day: 92, title: "Microservices Project (Part 2)", folder: "CAPSTONE/day-91-92-microservices-project", level: "Capstone" },
    { day: 93, title: "Open Source Contribution (Part 1)", folder: "CAPSTONE/day-93-94-open-source-contribution", level: "Capstone" },
    { day: 94, title: "Open Source Contribution (Part 2)", folder: "CAPSTONE/day-93-94-open-source-contribution", level: "Capstone" },
    { day: 95, title: "Fullstack Application (Part 1)", folder: "CAPSTONE/day-95-96-fullstack-application", level: "Capstone" },
    { day: 96, title: "Fullstack Application (Part 2)", folder: "CAPSTONE/day-95-96-fullstack-application", level: "Capstone" },
    { day: 97, title: "Complex Dashboard (Part 1)", folder: "CAPSTONE/day-97-98-complex-dashboard", level: "Capstone" },
    { day: 98, title: "Complex Dashboard (Part 2)", folder: "CAPSTONE/day-97-98-complex-dashboard", level: "Capstone" },
    { day: 99, title: "Master Project (Part 1)", folder: "CAPSTONE/day-99-100-master-project", level: "Capstone" },
    { day: 100, title: "Master Project (Part 2)", folder: "CAPSTONE/day-99-100-master-project", level: "Capstone" }
];

const grid = document.getElementById('projects-grid');
const tabs = document.querySelectorAll('.tab-btn');
const repoBaseUrl = "https://github.com/Shubham-cyber-prog/100-days-of-web-development/tree/main/";
const liveBaseUrl = "https://Shubham-cyber-prog.github.io/100-Days-Of-Web-Development/";

function renderProjects(category = 'All') {
    grid.innerHTML = '';

    const filteredProjects = category === 'All'
        ? projects
        : projects.filter(p => p.level === category);

    // Ensure sorted by day
    filteredProjects.sort((a, b) => a.day - b.day);

    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-header">
                <span class="day-number">Day ${project.day}</span>
                <span class="badge">${project.level}</span>
            </div>
            <h3>${project.title}</h3>
            <p>Project for Day ${project.day}</p>
            <div class="card-actions">
                <a href="${liveBaseUrl}${project.folder}/index.html" target="_blank" class="btn-small">Live Demo</a>
                <a href="${repoBaseUrl}${project.folder}" target="_blank" class="btn-small outline">View Code</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Tab Switching Logic
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderProjects(tab.dataset.category);
    });
});

// Initial Render
renderProjects();