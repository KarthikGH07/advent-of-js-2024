class EventEmitter {
  subscriptions;
  constructor() {
    this.subscriptions = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.subscriptions.has(eventName)) {
      this.subscriptions.set(eventName, new Set());
    }
    const subscriptions = this.subscriptions.get(eventName);
    const callbackObj = { callback };
    subscriptions.add(callbackObj);

    return {
      unsubscribe: () => {
        subscriptions.delete(callbackObj);
        if (subscriptions.size === 0) {
          delete this.subscriptions.eventName;
        }
      },
    };
  }

  emit(eventName, ...args) {
    const subscriptions = this.subscriptions.get(eventName);
    if (subscriptions) {
      subscriptions.forEach((cbObj) => {
        cbObj.callback.apply(this, args);
      });
    }
  }
}

const emitter = new EventEmitter();

const callbackFn = (msg) => {
  console.log("Received message:", msg);
};

const { unsubscribe } = emitter.subscribe("message", callbackFn);

emitter.subscribe("message", callbackFn);

emitter.subscribe("notification", (msg) => {
  console.log("Received notification:", msg);
});

emitter.emit("message", "Hello World!");
emitter.emit("notification", "Hello World!");
