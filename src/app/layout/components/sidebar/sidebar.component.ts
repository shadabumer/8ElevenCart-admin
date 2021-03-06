import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isActive: boolean;
  collapsed: boolean;
  // showMenu: string;
  pushRightClass: string;
  toggleCategories: boolean = false;
  toggleItems: boolean = false;
  toggleStaff: boolean = false;

  @Output() collapsedEvent = new EventEmitter<boolean>();

  constructor( public router: Router) {
      // this.router.events.subscribe(val => {
      //     if (
      //         val instanceof NavigationEnd &&
      //         window.innerWidth <= 992 &&
      //         this.isToggled()
      //     ) {
      //         this.toggleSidebar();
      //     }
      // });
  }

  ngOnInit() {
      this.isActive = false;
      this.collapsed = false;
      // this.showMenu = '';
      this.pushRightClass = 'push-right';
  }


  eventCalled() {
      this.isActive = !this.isActive;
  }

  // addExpandClass(element: any) {
  //   // console.log('element:', element);
  //     if (element === this.showMenu) {
  //       console.log('if showmenu:', this.showMenu);
  //         this.showMenu = '0';
  //     } else {
  //       console.log('else showmenu:', this.showMenu);
  //         this.showMenu = element;
  //     }
  // }

  toggleCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle('rtl');
  }

  changeLang(language: string) {
      // this.translate.use(language);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
  }

}
