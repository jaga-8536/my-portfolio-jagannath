import { Component, AfterViewInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu = false;
  @ViewChild('targetElement', { static: false }) targetElement!: ElementRef;
  activeMenu: string = 'home';
  menuItems = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Skills', section: 'skill' },
    { label: 'Education', section: 'education' },
    { label: 'Contact', section: 'contact' },
  ];

  constructor(private router: Router) { }


  toggleMenu() {
    this.menu = !this.menu;
  }

   // Close the menu when clicking outside
   @HostListener('document:click', ['$event'])
   onDocumentClick(event: MouseEvent) {
     const clickedInside = (event.target as HTMLElement).closest('.headermenu');
     if (!clickedInside) {
       this.menu = false; // Close the menu
     }
   }
 

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      const offset = 60; // Adjust as needed
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementPosition - offset;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
    this.toggleMenu();
  }

  setActiveMenu(section: string) {
    
    this.activeMenu = section;
    this.router.navigate([section]);
    this.router.navigate(['/home'], { fragment: 'targetId' });
    
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = this.menuItems.map(item => document.getElementById(item.section));
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      if (section) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition < bottom) {
          this.activeMenu = section.id;
          break;
        }
      }
    }
  }


}



