import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
FormsModule
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;  // Declare the form group
  successMessage: string = ''; // For displaying success message
  errorMessage: string = '';  // For displaying error message

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialize the form with FormBuilder
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  // Submit the form
  onSubmit(): void {
    if (this.contactForm.valid) {
      // Here you would generally send the form data to a server
      console.log('Form Submitted:', this.contactForm.value);

      // Display success message
      this.successMessage = 'Your message has been sent successfully!';
      this.errorMessage = ''; // Reset error message

      // Reset the form after submission
      this.contactForm.reset();
    } else {
      // Display error message if the form is invalid
      this.errorMessage = 'Please fill out the form correctly.';
      this.successMessage = ''; // Reset success message
    }
  }

}
