// Scripts/studentSearch.js

$(document).ready(function () {
    // Search button click handler
    $('#searchButton').on('click', function () {
        performSearch();
    });

    // Search on Enter key
    $('#searchInput').on('keypress', function (e) {
        if (e.which === 13) {
            performSearch();
            e.preventDefault(); // Prevent form submission
        }
    });

    function performSearch() {
        const searchTerm = $('#searchInput').val().trim().toLowerCase();
        const $rows = $('#studentsTable tbody tr');

        // Show all rows first
        $rows.show().css('color', '');

        if (searchTerm === '') {
            return; // Exit if search is empty
        }

        // Filter rows
        $rows.each(function () {
            const $row = $(this);
            const firstName = $row.find('td:nth-child(2)').text().toLowerCase();

            if (firstName.includes(searchTerm)) {
                // Highlight matching row
                $row.css('color', 'red');
                // Remove highlight after 3 seconds
                setTimeout(function () {
                    $row.css('color', '');
                }, 3000);
            } else {
                // Hide non-matching rows
                $row.hide();
            }
        });
    }
});