export default function copyToClipboard({
  text,
  id,
}: {
  text: string;
  id: string;
}) {
  const htmlMessage = document.querySelector(`#${id}`);
  navigator.clipboard.writeText(text).then(
    () => {
      if (htmlMessage) {
        htmlMessage.textContent = 'Copied!';
        setTimeout(() => {
          htmlMessage.textContent = 'Click on icon to copy';
        }, 1500);
      }
    },
    () => {
      if (htmlMessage) {
        htmlMessage.textContent = 'Something happened... try to copy again';
        setTimeout(() => {
          htmlMessage.textContent = 'Click on icon to copy';
        }, 1500);
      }
    }
  );
}
