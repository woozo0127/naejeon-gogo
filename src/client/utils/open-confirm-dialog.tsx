import { Button, Dialog } from '@naejeon-gogo/design';
import { TriangleAlert } from 'lucide-react';
import { overlay } from 'overlay-kit';

type ConfirmDialogOptions = {
  title: string;
  body: string;
  confirmText?: string;
  cancelText?: string;
};

function ConfirmDialogContent({
  isOpen,
  close,
  unmount,
  title,
  body,
  confirmText = '확인',
  cancelText = '닫기',
}: ConfirmDialogOptions & {
  isOpen: boolean;
  close: (result: boolean) => void;
  unmount: () => void;
}) {
  return (
    <Dialog
      open={isOpen}
      onOverlayClick={() => close(false)}
      onExited={unmount}
      header={
        <>
          <Dialog.Icon icon={TriangleAlert} variant="danger" />
          {title}
        </>
      }
      body={body}
      footer={
        <>
          <Button variant="secondary" onClick={() => close(false)}>
            {cancelText}
          </Button>
          <Button variant="primary" onClick={() => close(true)}>
            {confirmText}
          </Button>
        </>
      }
    />
  );
}

export function openConfirmDialog(options: ConfirmDialogOptions): Promise<boolean> {
  return overlay.openAsync<boolean>(({ isOpen, close, unmount }) => (
    <ConfirmDialogContent isOpen={isOpen} close={close} unmount={unmount} {...options} />
  ));
}
