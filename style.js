document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('popup-overlay');
    const acceptBtn = document.getElementById('accept-btn');
    const declineBtn = document.getElementById('decline-btn');
  
    // Funzione per nascondere il popup
    function hidePopup() {
      overlay.style.display = 'none';
    }
  
    // Funzione per mostrare il popup
    function showPopup() {
      overlay.style.display = 'flex';
    }
  
    // Verifica se l'accettazione dei cookie e termini e condizioni è stata effettuata in precedenza
    const isAccepted = localStorage.getItem('cookieAccepted');
    if (!isAccepted) {
      showPopup();
    }
  
    // Aggiungi gestore di eventi per il pulsante Accetta
    acceptBtn.addEventListener('click', function() {
      hidePopup();
      // Salvare lo stato di accettazione dei cookie e termini e condizioni nel localStorage
      localStorage.setItem('cookieAccepted', 'true');
      // Disabilita i pulsanti
      acceptBtn.disabled = true;
      declineBtn.disabled = true;
    });
  
    // Aggiungi gestore di eventi per il pulsante Rifiuta
    declineBtn.addEventListener('click', function() {
      hidePopup();
      // Reindirizza l'utente a una pagina di rifiuto
      window.location.href = 'Rifiuto.html';
    });
  });
  
