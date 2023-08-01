import {isEscapeKey} from './util.js';
import {modals} from './modals.js';

class MessageModal {
  constructor () {
    this.isShowed = false;
    this.success = document.querySelector('#success').content.querySelector('.success');
    this.error = document.querySelector('#error').content.querySelector('.error');
    this.onClose = this.onClose.bind(this);
  }

  /**
   * @param {'success' | 'error'} type
   */
  show (type) {
    this.isShowed = true;

    if (type === 'success') {
      this.modal = this.success.cloneNode(true);
    } else if (type === 'error') {
      this.modal = this.error.cloneNode(true);
    }

    document.body.appendChild(this.modal);
    modals.add(this);

    this.modal.addEventListener('click', this.onClose);
  }

  hide () {
    if (this.isShowed === false) {
      return;
    }

    this.isShowed = false;
    this.modal.removeEventListener('click', this.onClose);
    this.modal.remove();
    modals.remove(this);
  }

  onClose (evt) {
    if (evt.target.closest('.success__button, .error__button')) {
      this.hide();
    }
    if (!evt.target.closest('.success__inner, .error__inner')) {
      this.hide();
    }
  }
}

export const messageModal = new MessageModal();


