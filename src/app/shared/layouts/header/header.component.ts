import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', command: () => this.router.navigate(['/home']) },
      { label: 'Registro', icon: 'pi pi-user-plus', command: () => this.router.navigate(['/register']) },
      { label: 'Iniciar Sesión', icon: 'pi pi-sign-in', command: () => this.router.navigate(['/login']) },
      { label: 'Explorar', icon: 'pi pi-star-fill', command: () => this.router.navigate(['/home']) }
    ];
  }

  logout() {
    console.log('Usuario salió');
    this.router.navigate(['/login']);
  }
}
