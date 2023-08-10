

// This waits until the webpage is fully loaded before doing anything
document.addEventListener('DOMContentLoaded', () => {
    // We're looking for all checkboxes with the class "task-checkbox"
    const checkboxes = document.querySelectorAll('.task-checkbox');
    
    // We're adding a function to each checkbox that will run when it's clicked
    checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
        // This finds the label associated with the checkbox
        const label = document.querySelector(`label[for=task${index}]`);
        
        // If the checkbox is checked, we'll add a "completed" class to the label
        if (checkbox.checked) {
          label.classList.add('completed');
        } else {
          // If the checkbox is not checked, we'll remove the "completed" class
          label.classList.remove('completed');
        }
      });
    });
  });
  