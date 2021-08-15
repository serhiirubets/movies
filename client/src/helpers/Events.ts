interface Listeners {
  [key: string]: any[];
}
export class Events {
  listeners: Listeners = {

  }

  dispatch(type: string, params?: any) {
    if (!this.listeners[type]) {
      return;
    }

    this.listeners[type].forEach((listener) => listener(params));
  }

  subscribe(type: string, callback: () => void) {
    if (this.listeners[type]) {
      this.listeners[type].push(callback);
    } else {
      this.listeners[type] = [callback];
    }
  }
}


