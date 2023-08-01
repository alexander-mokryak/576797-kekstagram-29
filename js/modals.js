class Modals {
  showed = [];

  add(modal) {
    window.console.log(modal);
    this.showed.push(modal);
  }

  remove(modal) {
    this.showed = this.showed.filter((item) => item !== modal); // TODO работает только пока модалки синглтоны
  }

  onClose(evt) {
    if (this.showed.length === 0) {
      return;
    }

    // document.activeElement.tagName //caps 'BODY' проверяй на input textarea
    if (evt.target.closest('.img-upload__field-wrapper')) {
      return;
    }

    const modal = this.showed.pop();

    if (!modal) {
      return;
    }

    modal.hide();
  }

  init() {
    document.addEventListener('keydown', (evt) => this.onClose(evt), true);
  }
}

export const modals = new Modals();
modals.init();
