document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var generatedResume = document.getElementById('generatedResume');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission from refreshing the page
        // Get user input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('workExperience').value;
        var skills = document.getElementById('skills').value.split(',');
        // Populate the resume section with the input values
        document.getElementById('personalInfo').innerHTML = "\n        <strong>Personal Information:</strong><br>\n        Name: ".concat(name, "<br>\n        Email: ").concat(email, "<br>\n        Phone: ").concat(phone, "<br>\n      ");
        document.getElementById('educationInfo').innerHTML = "\n        <strong>Education:</strong><br>\n        ".concat(education, "\n      ");
        document.getElementById('workInfo').innerHTML = "\n        <strong>Work Experience:</strong><br>\n        ".concat(workExperience, "\n      ");
        document.getElementById('skillsInfo').innerHTML = "\n        <strong>Skills:</strong><br>\n        ".concat(skills.map(function (skill) { return skill.trim(); }).join(', '), "\n      ");
        // Show the generated resume section
        generatedResume.style.display = 'block';
    });
});
