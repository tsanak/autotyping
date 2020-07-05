class AutoTyping {
    constructor(selector, text, {
        typeSpeed = 150,
        deleteSpeed = 150,
        waitBeforeDelete = 1000,
        waitBetweenWords = 1000,
        writeWhole = false
      } = {}) {
        this.selector = selector;
        this.text = text;
        this.typeSpeed = typeSpeed;
        this.deleteSpeed = deleteSpeed;
        this.waitBeforeDelete = waitBeforeDelete;
        this.waitBetweenWords = waitBetweenWords;
        this.writeWhole = writeWhole;
        this.el = document.querySelector(selector);
    }

    async start() {
        const _el = this.el;
        for (let index = 0; index < this.text.length; index++) {
            const word = this.text[index];
            let chars = word.split('');
            if(this.writeWhole) {
                chars = [word];
            }

            await this.writeText(chars);

            if(index == this.text.length - 1) index = -1;
        }
    }

    writeText(chars) {
        let self = this;
        return new Promise(resolve => {
            const _el = this.el;
            let nextAddSpace = false;
            let write_interval = setInterval(() => {
                let c = chars.shift();

                if(nextAddSpace) {
                    nextAddSpace = false;
                    c = ' ' + c;
                }

                nextAddSpace = c == ' ';

                _el.innerText += c;

                if(chars.length == 0) {
                    clearInterval(write_interval);
                    setTimeout(() => {
                        let remove_interval = setInterval(() => {
                            const text = _el.innerText;
                            if(self.writeWhole) {
                                _el.innerText = '';
                            } else {
                                _el.innerText = text.substr(0, text.length - 1);
                            }
                            if(_el.innerText.length == 0) {
                                clearInterval(remove_interval);
                                setTimeout(() => {
                                    return resolve()
                                }, this.waitBetweenWords)
                            }
                        }, this.deleteSpeed);
                    }, this.waitBeforeDelete)
                }
            }, this.typeSpeed);
        })
    }
}

export default AutoTyping;