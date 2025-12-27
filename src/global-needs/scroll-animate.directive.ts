import { Directive, ElementRef, Renderer2, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit, OnDestroy {
  @Input('appScrollAnimate') animation: string = 'fadeInUp';
  @Input() duration: string = '1s';
  @Input() delay: string = '0s';
  @Input() once: boolean = true;
  @Input() threshold: number = 0;
  @Input() rootMargin: string = '0px';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.isInViewport(this.el.nativeElement)) {
        this.animateIn();
        return;
      }

      if ('IntersectionObserver' in window) {
        this.observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              this.animateIn();
              if (this.once) this.observer?.disconnect();
            } else if (!this.once) {
              this.animateOut();
            }
          },
          {
            threshold: this.threshold,
            rootMargin: this.rootMargin,
          }
        );
        this.observer.observe(this.el.nativeElement);
      } else {
        this.animateIn();
      }
    }, 100); // Delay to wait for layout/images
  }

  private animateIn() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.el.nativeElement, 'animation-duration', this.duration);
    this.renderer.setStyle(this.el.nativeElement, 'animation-delay', this.delay);
    this.renderer.setStyle(this.el.nativeElement, 'animation-fill-mode', 'both');
    this.renderer.addClass(this.el.nativeElement, 'animate');
    this.renderer.addClass(this.el.nativeElement, this.animation);
  }

  private animateOut() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.removeClass(this.el.nativeElement, 'animate');
    this.renderer.removeClass(this.el.nativeElement, this.animation);
  }

  private isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
