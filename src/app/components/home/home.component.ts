import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedCategory = localStorage.getItem('selectedCategory');
      if (savedCategory) {
        this.selectedCategory = savedCategory;
      }
    }
  }

  isLoginModalOpen = false;
  isSignupModalOpen = false;
  selectedCategory: string = 'all';

  openModal(type: string) {
    if (type === 'login') {
      this.isLoginModalOpen = true;
    } else if (type === 'signup') {
      this.isSignupModalOpen = true;
    }
    setTimeout(() => {
      const modal = document.querySelector('.modal-animation');
      if (modal) modal.classList.add('scale-100');
    }, 10);
  }

  closeModal() {
    const modal = document.querySelector('.modal-animation');
    if (modal) modal.classList.remove('scale-100');
    setTimeout(() => {
      this.isLoginModalOpen = false;
      this.isSignupModalOpen = false;
    }, 300); 
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('selectedCategory', category);
    }
  }


}
