export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918882537520"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.2c2.3 1.2 4.9 1.8 7.7 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.8-2l-.5-.3-4.9 1.3 1.3-4.8-.3-.5A12.6 12.6 0 1 1 16 28.8zm7-9.5c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.5.3-.9.1-.4-.2-1.8-.7-3.4-2.2-1.3-1.1-2.1-2.5-2.4-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.1-1.2-2.8-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.3 3.7 1.5 4c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.2.8.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
}