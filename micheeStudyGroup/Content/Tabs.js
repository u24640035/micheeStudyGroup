function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the tab to show from data attribute
const tabId = this.getAttribute('data-tab');

// Hide all tab contents
document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
});

// Show the selected tab content
document.getElementById(tabId).classList.add('active');

// Update active button styling
tabButtons.forEach(btn => {
    btn.classList.remove('active');
});
this.classList.add('active');
        });
    });

// Activate the first tab by default if none is active
if (!document.querySelector('.tab-button.active')) {
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) firstTab.click();
}
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTabs);