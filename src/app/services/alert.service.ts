import { Component, Injectable, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

export interface Toast {
  message: string;
  classname: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  toasts: Toast[] = [];

  toastTemplates: any = {
    warning: 'bg-warning text-light',
    danger: 'bg-danger text-light border-none',
    succes: 'bg-success text-light'
  }

	alert(type: string, message: string) {
    let newToast: Toast = {
      message: message,
      classname: this.toastTemplates[type]
    } 
    this.toasts.push(newToast)
  }

	remove(toast: Toast) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}

@Component({
  selector: 'app-alert-container',
  templateUrl: 'alert.templates.html'
})
export class AlertContainerComponent implements OnInit {
  @ViewChild('toast') public toastTemplate!: TemplateRef<any>;

  toastService = inject(AlertService);

  ngOnInit() {
  }
}