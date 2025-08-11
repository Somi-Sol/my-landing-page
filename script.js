const form = document.getElementById('interest-form');
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  if (!email) return;

  try {
    await fetch('https://example.com/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
  } catch (err) {
    console.error('Email submission failed', err);
  }

  window.location.href = 'https://docs.google.com/forms/d/EXAMPLE/form';
});
