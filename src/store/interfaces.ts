export interface ModalMessage {
  title: string;
  description: string;
}

export interface ConfirmModal extends ModalMessage {
  isOpen: boolean;
}
