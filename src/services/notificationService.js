const notificationService = {
    showSuccessMessage(message) {
      alert(message);
    },
  
    showErrorMessage(message) {
      alert(`Error: ${message}`);
    },
  };
  
  export default notificationService;
  