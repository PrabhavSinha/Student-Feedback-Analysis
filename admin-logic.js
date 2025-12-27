// Global chart variable to update later
let feedbackChart;

// 1. Initialize the Chart on Load
window.onload = function() {
    const ctx = document.getElementById('feedbackChart').getContext('2d');
    feedbackChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Excellent', 'Good', 'Needs Improvement'],
            datasets: [{
                data: [0, 0, 0], // Starts at zero
                backgroundColor: ['#00b894', '#feca57', '#ff7675'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { color: '#fff' } } }
        }
    });
};

// 2. The Analysis Logic
function analyzeFeedback() {
    // Simulated Data gathered from student forms
    const mockData = {
        avgCourseRating: 3.2,
        commonComplaint: "Difficult Lab Exercises",
        instructorScore: 4.8
    };

    // Update Stats
    document.getElementById('course-stat').innerText = mockData.avgCourseRating + "/5";
    document.getElementById('sentiment-stat').innerText = "Mixed";
    document.getElementById('action-stat').innerText = "3";

    // Update Chart Data
    feedbackChart.data.datasets[0].data = [40, 35, 25];
    feedbackChart.update();

    // 3. Generate Suggestions Dynamically
    const suggestionsBox = document.getElementById('suggestions-container');
    
    // Logic: If course rating is below 4, suggest improvement
    let suggestionHTML = `
        <div class="suggestion-item high">
            <strong>Critical Suggestion:</strong>
            <p>Course rating is ${mockData.avgCourseRating}. Students reported: "${mockData.commonComplaint}".</p>
            <span class="fix">Action: Redesign Lab Manuals for DBMS and DSA.</span>
        </div>
        <div class="suggestion-item med">
            <strong>Resource Update:</strong>
            <p>Library digital access is being rated low in Institutional Services.</p>
            <span class="fix">Action: Integrate IEEE Xplore access into the portal.</span>
        </div>
        <div class="suggestion-item low">
            <strong>Positive Reinforcement:</strong>
            <p>Faculty performance is at ${mockData.instructorScore}/5.</p>
            <span class="fix">Action: Schedule Peer-to-Peer faculty training sessions.</span>
        </div>
    `;
    
    suggestionsBox.innerHTML = suggestionHTML;
}