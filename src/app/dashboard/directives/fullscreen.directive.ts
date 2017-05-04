import {Directive, HostListener, Input, ElementRef, Renderer} from '@angular/core';
// const screenfull = require('screenfull');

declare var screenfull: any;

@Directive({
	selector: '[toggleFullscreen]'
})
export class ToggleFullscreenDirective {
	constructor(
		private el:ElementRef,
		private Renderer: Renderer
	) {

	}
	@Input()
		toggleFullscreen;

	@HostListener('click') onClick() {
		if (screenfull.enabled) {
			screenfull.toggle(this.toggleFullscreen);
			//this.Renderer.setElementClass(this.el, 'onFullMode', true);
			if(this.toggleFullscreen.classList.contains('onFullMode')) {
				this.toggleFullscreen.classList.remove('onFullMode');
			}else {
				this.toggleFullscreen.classList.add('onFullMode');
			}
		}
	}
}