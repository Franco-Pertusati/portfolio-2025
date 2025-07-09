import { Injectable, signal, WritableSignal } from '@angular/core';

export interface ToastNotification {
  title?: string;
  message: string;
  icon?: string;
}

type InternalToast = ToastNotification & { fading?: boolean };


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toastList: WritableSignal<InternalToast[]> = signal([])

  default(message: string) {
    const newToast: InternalToast = {
      title: undefined,
      message: message,
      icon: undefined
    }
    this.addToast(newToast)
  }

  description(title: string, message: string) {
    const newToast: InternalToast = {
      title: title,
      message: message,
      icon: undefined
    }
    this.addToast(newToast)
  }

  succes(message: string) {
    const newToast: InternalToast = {
      title: undefined,
      message: message,
      icon: 'check_circle'
    }
    this.addToast(newToast)
  }

  info(message: string) {
    const newToast: InternalToast = {
      title: undefined,
      message: message,
      icon: 'info'
    }
    this.addToast(newToast)
  }

  warning(message: string) {
    const newToast: InternalToast = {
      title: undefined,
      message: message,
      icon: 'warning'
    }
    this.addToast(newToast)
  }

  error(message: string) {
    const newToast: InternalToast = {
      title: undefined,
      message: message,
      icon: 'error'
    }
    this.addToast(newToast)
  }

  addToast(newToast: InternalToast & { fading?: boolean }) {
    const updatedList = [...this.toastList(), newToast];
    this.toastList.set(updatedList);

    setTimeout(() => {
      newToast.fading = true;
      this.toastList.set([...this.toastList()]);
    }, 2600);

    setTimeout(() => {
      this.removeToast(newToast);
    }, 3000);
  }

  removeToast(toast: InternalToast) {
    const updatedList = this.toastList().filter(t => t !== toast);
    this.toastList.set(updatedList);
  }
}
