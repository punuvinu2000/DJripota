document.addEventListener('DOMContentLoaded', () => {
    const doorStatus = document.getElementById('doorStatus');
    const lockButton = document.getElementById('lockButton');
    const unlockButton = document.getElementById('unlockButton');

    lockButton.addEventListener('click', () => {
        doorStatus.textContent = 'Door is Locked';
        doorStatus.style.color = '#ff4d4d';
    });

    unlockButton.addEventListener('click', () => {
        doorStatus.textContent = 'Door is Unlocked';
        doorStatus.style.color = '#4CAF50';
    });
});
