class Popover {
    constructor(triggerElement, title, content) {
      this.triggerElement = triggerElement;
      this.title = title;
      this.content = content;
      this.popover = null;
  
      this.init();
    }
  
    init() {
      this.triggerElement.addEventListener('click', () => {
        if (this.popover) {
          this.hide();
        } else {
          this.show();
        }
      });
    }
  
    createPopover() {
      const popover = document.createElement('div');
      popover.className = 'popover';
  
      const header = document.createElement('div');
      header.className = 'popover-header';
      header.textContent = this.title;
  
      const body = document.createElement('div');
      body.className = 'popover-body';
      body.textContent = this.content;
  
      popover.appendChild(header);
      popover.appendChild(body);
  
      return popover;
    }
  
    show() {
      this.popover = this.createPopover();
      this.triggerElement.parentElement.appendChild(this.popover);
  
      const buttonRect = this.triggerElement.getBoundingClientRect();
      const popoverRect = this.popover.getBoundingClientRect();
  
      this.popover.style.top = `${buttonRect.top - popoverRect.height}px`;
      this.popover.style.left = `${buttonRect.left + buttonRect.width / 2 - popoverRect.width / 2}px`;
    }
  
    hide() {
      if (this.popover) {
        this.popover.remove();
        this.popover = null;
      }
    }
  }
  
  const button = document.getElementById('popover-button');
  new Popover(button, 'Popover Title', 'This is the popover content.');
  