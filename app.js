/**
 * FungaTec - Interactive Virtual Card Application
 * Contact: Jonathan Gómez Peregrina
 */

// Master Google Drive Link
const GOOGLE_DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1DmNFRODjGR6LWBgbRhmy3PZJccYF8bjz?usp=sharing';

document.addEventListener('DOMContentLoaded', () => {
    // Drive button trigger if needed
    const openDriveBtn = document.getElementById('openDriveBtn');
    if (openDriveBtn) {
        openDriveBtn.setAttribute('href', GOOGLE_DRIVE_FOLDER);
    }
});
