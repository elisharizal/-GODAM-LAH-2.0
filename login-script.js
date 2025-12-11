function showScanModal() {
    const modal = document.getElementById('scanModal');
    modal.classList.add('active');
    
    // Simulate scanning process
    setTimeout(() => {
        document.getElementById('scanStatus').textContent = 'Reading Smart ID data...';
    }, 1500);
    
    setTimeout(() => {
        document.getElementById('scanStatus').textContent = 'Verifying identity...';
    }, 3000);
    
    setTimeout(() => {
        closeScanModal();
        showSuccessModal();
    }, 4500);
}

function closeScanModal() {
    const modal = document.getElementById('scanModal');
    modal.classList.remove('active');
    document.getElementById('scanStatus').textContent = 'Hold your Smart ID card steady...';
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    // Redirect after 2 seconds
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 2000);
}

function handleManualLogin(event) {
    event.preventDefault();
    const smartId = document.getElementById('smartId').value;
    
    if (smartId) {
        document.getElementById('verifiedId').textContent = smartId;
        showSuccessModal();
    }
}

// Close modal when clicking outside
document.getElementById('scanModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeScanModal();
    }
});

// Format Smart ID input
document.getElementById('smartId').addEventListener('input', function(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
    
    if (value.length > 6) {
        value = value.slice(0, 6) + '-' + value.slice(6);
    }
    if (value.length > 9) {
        value = value.slice(0, 9) + '-' + value.slice(9);
    }
    
    e.target.value = value.slice(0, 14);
});