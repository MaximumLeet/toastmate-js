class Toast {
    constructor(options = {}) {
        const defaults = {
            message: "",
            duration: 3000
        };
        this.options = {...defaults, ...options};
        this.container = document.createElement('div');
        this.container.classList.add('toastyMessage');
        document.body.appendChild(this.container);
    };
    doError(message) {
        throw new Error(message);
    }
    doWarn(message) {
        console.warn(message);
    }
    cycle(opts={}) {
        var container = document.querySelector('.toastyMessage');
        if (!container) this.doError('Toastmate div not found.');
        var args = {...this.options, ...opts};
        container.textContent = args.message? args.message : this.options.message;
        container.classList.add('toastyshow');
        var dur = args.duration? args.duration : this.options.duration;
        setTimeout(function() {
            container.classList.remove('toastyshow');
        }, dur);
    }
    show(opts={}) {
        var container = document.querySelector('.toastyMessage');
        if (!container) this.doError('Toastmate div not found.');
        var args = {...this.options, ...opts};
        container.textContent = args.message? args.message : this.options.message;
        container.classList.add('toastyshow');
    }
    hide() {
        var container = document.querySelector('.toastyMessage');
        if (!container) this.doError('Toastmate div not found.');
        container.classList.remove('toastyshow');
    }
}