import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main',
  imports: [MatIconModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main implements OnInit, AfterViewInit {
  @ViewChild('heroVideo', { static: false })
  heroVideo!: ElementRef<HTMLVideoElement>;

  ngOnInit(): void {
    // Força o reload da página se necessário para vídeos
  }

  ngAfterViewInit(): void {
    // Força o vídeo a tocar após a view estar pronta
    setTimeout(() => {
      this.playVideo();
    }, 100);
  }

  private playVideo(): void {
    if (this.heroVideo?.nativeElement) {
      const video = this.heroVideo.nativeElement;

      // Garante que o vídeo está mutado
      video.muted = true;
      video.loop = true;
    }
  }
}
