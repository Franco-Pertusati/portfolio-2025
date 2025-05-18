import { Injectable, signal, WritableSignal } from '@angular/core';

export interface ToastNotification {
  title: string | undefined;
  message: string;
  icon: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastList: WritableSignal<ToastNotification[]> = signal([])

  default(message: string) {
    const newToast: ToastNotification = {
      title: undefined,
      message: message,
      icon: undefined
    }
    this.addToast(newToast)
  }

  description(title: string, message: string) {
    const newToast: ToastNotification = {
      title: title,
      message: message,
      icon: undefined
    }
    this.addToast(newToast)
  }

  succes(message: string) {
    const newToast: ToastNotification = {
      title: undefined,
      message: message,
      icon: 'check_circle'
    }
    this.addToast(newToast)
  }

  info(message: string) {
    const newToast: ToastNotification = {
      title: undefined,
      message: message,
      icon: 'info'
    }
    this.addToast(newToast)
  }

  warning(message: string) {
    const newToast: ToastNotification = {
      title: undefined,
      message: message,
      icon: 'warning'
    }
    this.addToast(newToast)
  }

  error(message: string) {
    const newToast: ToastNotification = {
      title: undefined,
      message: message,
      icon: 'error'
    }
    this.addToast(newToast)
  }

  addToast(newToast: ToastNotification) {
    this.toastList().push(newToast)
    console.log(this.toastList())
    setTimeout(() => {
      this.removeToast(newToast)
    }, 10500);
  }

  removeToast(toast: ToastNotification) {
    const index = this.toastList().indexOf(toast);
    if (index > -1) {
      this.toastList().splice(index, 1);
    }
  }
}
