// Function to toggle visibility of folder content
function toggleFolder(folderId) {
    var folderContent = document.getElementById(folderId);

    // Get all folder content elements
    var allFolders = document.querySelectorAll('.folder-content');

    // Loop through all folder content elements and hide them except the clicked one
    allFolders.forEach(function(folder) {
        if (folder !== folderContent) {
            folder.style.display = 'none'; // Hide other folders
        }
    });

    // Toggle visibility of the clicked folder content
    folderContent.style.display = folderContent.style.display === 'block' ? 'none' : 'block';
}

// Responsive Folder View for smaller screens (Mobile)
function handleResize() {
    var allFolders = document.querySelectorAll('.folder-content');

    if (window.innerWidth <= 768) { // For small screens (mobile)
        // Set the folders to be hidden initially
        allFolders.forEach(function(folder) {
            folder.style.display = 'none';
        });
    } else { // For larger screens (tablet, desktop)
        // Ensure folders are visible by default
        allFolders.forEach(function(folder) {
            folder.style.display = 'block';
        });
    }
}

// Initial call to handle the resize functionality on page load
handleResize();

// Attach the resize event listener to handle dynamic resizing
window.addEventListener('resize', handleResize);
