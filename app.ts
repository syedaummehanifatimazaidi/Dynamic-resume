document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const generatedResume = document.getElementById('generatedResume') as HTMLElement;
  
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault(); // Prevent form submission from refreshing the page
  
      // Get user input values
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const phone = (document.getElementById('phone') as HTMLInputElement).value;
      const education = (document.getElementById('education') as HTMLInputElement).value;
      const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  
      // Populate the resume section with the input values
      (document.getElementById('personalInfo') as HTMLElement).innerHTML = `
        <strong>Personal Information:</strong><br>
        Name: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
      `;
  
      (document.getElementById('educationInfo') as HTMLElement).innerHTML = `
        <strong>Education:</strong><br>
        ${education}
      `;
  
      (document.getElementById('workInfo') as HTMLElement).innerHTML = `
        <strong>Work Experience:</strong><br>
        ${workExperience}
      `;
  
      (document.getElementById('skillsInfo') as HTMLElement).innerHTML = `
        <strong>Skills:</strong><br>
        ${skills.map(skill => skill.trim()).join(', ')}
      `;
  
      // Show the generated resume section
      generatedResume.style.display = 'block';
    });
  });
  