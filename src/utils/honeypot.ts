/**
 * Invisible Honeypot Protection
 * Adds hidden fields that only bots fill - completely invisible to users
 */

export const createHoneypotField = (): HTMLInputElement => {
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website_url'; // Common honeypot name
  honeypot.style.cssText = `
    position: absolute !important;
    left: -9999px !important;
    top: -9999px !important;
    width: 1px !important;
    height: 1px !important;
    opacity: 0 !important;
    pointer-events: none !important;
    visibility: hidden !important;
    z-index: -1 !important;
  `;
  honeypot.setAttribute('tabindex', '-1');
  honeypot.setAttribute('autocomplete', 'off');
  honeypot.setAttribute('aria-hidden', 'true');
  return honeypot;
};

export const addHoneypotToForm = (form: HTMLFormElement): void => {
  const honeypot = createHoneypotField();
  form.appendChild(honeypot);
};

export const checkHoneypot = (formData: FormData): boolean => {
  const honeypotValue = formData.get('website_url') as string;
  return !honeypotValue || honeypotValue.trim() === '';
};

export const addHoneypotToAllForms = (): void => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    addHoneypotToForm(form as HTMLFormElement);
  });
};
