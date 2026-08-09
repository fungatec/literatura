/**
 * FungaTec - Interactive Virtual Card Application
 * Contact: Jonathan Gómez Peregrina
 */

// Master Google Drive Link
const GOOGLE_DRIVE_FOLDER = 'LNK';

document.addEventListener('DOMContentLoaded', () => {
    // Drive button trigger if needed
    const openDriveBtn = document.getElementById('openDriveBtn');
    if (openDriveBtn) {
        openDriveBtn.setAttribute('href', GOOGLE_DRIVE_FOLDER);
    }
});
