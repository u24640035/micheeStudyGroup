$(document).ready(function () {
  
    // WITH JSON IMPLEMENTATION
    

    // Save to Local Storage (JSON)
    $('#saveToStorage').click(function () {
        const students = [];
        $('#studentsTable tbody tr').each(function () {
            const row = $(this);
            students.push({
                studentNumber: row.find('td:eq(0)').text(),
                firstName: row.find('td:eq(1)').text(),
                lastName: row.find('td:eq(2)').text(),
                email: row.find('td:eq(3)').text()
            });
        });

        localStorage.setItem('studentData', JSON.stringify(students));
        alert('Data saved to local storage (JSON)!');
    });

    // Load from Local Storage (JSON) - Preserves existing data
    $('#loadFromStorage').click(function () {
        const savedData = localStorage.getItem('studentData');
        if (savedData) {
            const loadedStudents = JSON.parse(savedData);
            const tbody = $('#studentsTable tbody');

            // Get current students
            const currentStudents = [];
            tbody.find('tr').each(function () {
                currentStudents.push({
                    studentNumber: $(this).find('td:eq(0)').text(),
                    firstName: $(this).find('td:eq(1)').text(),
                    lastName: $(this).find('td:eq(2)').text(),
                    email: $(this).find('td:eq(3)').text()
                });
            });

            // Merge and remove duplicates by studentNumber
            const mergedStudents = [...currentStudents, ...loadedStudents]
                .filter((student, index, self) =>
                    index === self.findIndex(s => s.studentNumber === student.studentNumber)
                );

            // Update table
            tbody.empty();
            mergedStudents.forEach(function (student) {
                tbody.append(`
                    <tr>
                        <td>${student.studentNumber}</td>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.email}</td>
                        <td><button class="btn btn-sm btn-danger delete-btn">Delete</button></td>
                    </tr>
                `);
            });

            alert('Data loaded from local storage! (with JSON)');
        } else {
            alert('No JSON data found in local storage!');
        }
    });

    
    // WITHOUT JSON IMPLEMENTATION
   

    // Save to Local Storage (Without JSON)
    $('#saveToStorageNoJson').click(function () {
        // Clear previous storage
        for (let key in localStorage) {
            if (key.startsWith('student_') || key === 'studentCount') {
                localStorage.removeItem(key);
            }
        }

        $('#studentsTable tbody tr').each(function (index) {
            const row = $(this);
            localStorage.setItem(`student_${index}_number`, row.find('td:eq(0)').text());
            localStorage.setItem(`student_${index}_firstName`, row.find('td:eq(1)').text());
            localStorage.setItem(`student_${index}_lastName`, row.find('td:eq(2)').text());
            localStorage.setItem(`student_${index}_email`, row.find('td:eq(3)').text());
        });
        localStorage.setItem('studentCount', $('#studentsTable tbody tr').length);
        alert('Data saved without JSON!');
    });

    // Load from Local Storage (Without JSON) - Preserves existing data
    $('#loadFromStorageNoJson').click(function () {
        const count = parseInt(localStorage.getItem('studentCount')) || 0;
        const tbody = $('#studentsTable tbody');

        // Get current students
        const currentStudents = [];
        tbody.find('tr').each(function () {
            currentStudents.push({
                studentNumber: $(this).find('td:eq(0)').text(),
                firstName: $(this).find('td:eq(1)').text(),
                lastName: $(this).find('td:eq(2)').text(),
                email: $(this).find('td:eq(3)').text()
            });
        });

        // Load stored students
        const loadedStudents = [];
        for (let i = 0; i < count; i++) {
            const number = localStorage.getItem(`student_${i}_number`);
            if (!number) break;

            loadedStudents.push({
                studentNumber: number,
                firstName: localStorage.getItem(`student_${i}_firstName`),
                lastName: localStorage.getItem(`student_${i}_lastName`),
                email: localStorage.getItem(`student_${i}_email`)
            });
        }

        // Merge and remove duplicates by studentNumber
        const mergedStudents = [...currentStudents, ...loadedStudents]
            .filter((student, index, self) =>
                index === self.findIndex(s => s.studentNumber === student.studentNumber)
            );

        // Update table
        tbody.empty();
        mergedStudents.forEach(function (student) {
            tbody.append(`
                <tr>
                    <td>${student.studentNumber}</td>
                    <td>${student.firstName}</td>
                    <td>${student.lastName}</td>
                    <td>${student.email}</td>
                    <td><button class="btn btn-sm btn-danger delete-btn">Delete</button></td>
                </tr>
            `);
        });

        alert('Data loaded without JSON!');

    });

  
    // CLEAR STORAGE
  

    $('#clearStorage').click(function () {
        if (confirm('Are you sure you want to clear ALL local storage data?')) {
            localStorage.clear();
            alert('Local storage completely cleared!');
        }
    });
});