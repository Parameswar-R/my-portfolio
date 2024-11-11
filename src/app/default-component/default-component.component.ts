import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-component',
  templateUrl: './default-component.component.html',
  styleUrls: ['./default-component.component.css']
})
export class DefaultComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   this. fullHeight();

  }
   fullHeight = (): void => {
    const setFullHeight = (): void => {
      // Ensure elements with the 'js-fullheight' class get the correct height
      const windowHeight = window.innerHeight;
      document.querySelectorAll('.js-fullheight').forEach((element: Element) => {
        (element as HTMLElement).style.height = `${windowHeight}px`;
      });
    };
  
    // Set the full height on page load
    setFullHeight();
  
    // Adjust height on window resize
    window.addEventListener('resize', setFullHeight);
  };
  
  // Call the fullHeight function
  

}
