import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface ItemNavegacao {
  rotulo: string;
  rota: string;
  externo?: boolean;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  menuMobileAberto = false;
  rolagemAtiva = false;

  itensNavegacao: ItemNavegacao[] = [
    { rotulo: 'Home', rota: '/' },
    { rotulo: 'Sobre', rota: '/sobre' },
    { rotulo: 'Missões', rota: '/missoes' },
    { rotulo: 'Mensagens', rota: '/mensagens' },
    { rotulo: 'Contato', rota: '/contato' },
  ];

  constructor(private roteador: Router) {}

  @HostListener('window:scroll')
  aoRolarJanela(): void {
    this.rolagemAtiva = window.scrollY > 10;
  }

  @HostListener('window:resize')
  aoRedimensionarJanela(): void {
    if (window.innerWidth >= 1024) {
      this.menuMobileAberto = false;
    }
  }

  @HostListener('document:click', ['$event'])
  aoClicarDocumento(evento: Event): void {
    if (!this.menuMobileAberto) return;

    const alvo = evento.target as HTMLElement;
    const barraNavegacao = alvo.closest('header');

    if (!barraNavegacao) {
      this.fecharMenuMobile();
    }
  }

  // Manter compatibilidade com o método antigo
  toggleMobileMenu(): void {
    this.alternarMenuMobile();
  }

  // Manter compatibilidade com a propriedade antiga
  get isMobileMenuOpen(): boolean {
    return this.menuMobileAberto;
  }

  alternarMenuMobile(): void {
    this.menuMobileAberto = !this.menuMobileAberto;
  }

  fecharMenuMobile(): void {
    this.menuMobileAberto = false;
  }

  rastrearPorRota(indice: number, item: ItemNavegacao): string {
    return item.rota;
  }

  aoVivo(): void {
    // Implementar lógica para transmissão ao vivo
  }

  visiteNos(): void {
    // Implementar lógica para informações de visita
    this.roteador.navigate(['/contato']);
  }
}
