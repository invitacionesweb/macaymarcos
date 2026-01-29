

const scriptUrl = 'https://script.google.com/macros/s/AKfycbwLgQ8MOJfLpmC6S4Sx6gSiIz9tzPXEXPHY7kZO4czbIb3K67WLtJ7kRE-IF85Pqq5_zw/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    didOpen: () => Swal.showLoading()
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(res => {
      if (!res.ok) throw new Error('Error de red');
      Swal.fire('¡MUCHAS GRACIAS!', 'Formulario enviado', 'success');
    })
    .then(() => setTimeout(() => location.reload(), 1500))
    .catch(() =>
      Swal.fire('Error', 'No se pudo enviar el formulario', 'error')
    );
});
