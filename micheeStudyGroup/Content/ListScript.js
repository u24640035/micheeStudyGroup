function deleteRow(btn) {
    if (confirm('Are you sure you want to delete this row?')) {
        const row = btn.closest('tr');
        row.style.transition = 'all 0.3s ease';
        row.style.opacity = '0';
        setTimeout(() => row.remove(), 300);
    }
}

function colorTextRows() {
    const rows = document.querySelectorAll('tbody tr');
    const targetLetter = 'M'; // Name starting w M becomes red

    rows.forEach(row => {
        const firstNameCell = row.cells[1];
        if (firstNameCell && firstNameCell.textContent.trim().charAt(0).toUpperCase() === targetLetter.toUpperCase()) {
            
            const cells = row.querySelectorAll('td:not(:last-child)');
            cells.forEach(cell => {
                cell.classList.add('red-text');
            });
        }
    });
}

// Wait for DOM and Bootstrap to load
document.addEventListener('DOMContentLoaded', function () {
    // Small delay to ensure everything is loaded
    setTimeout(colorTextRows, 100);
});