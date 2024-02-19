function downloadFile() {
    // Create a Blob containing the file data
    const fileData = new Blob(['./pdf/overall.pdf'], { type: 'text/plain' });
  
    // Create an anchor element
    const a = document.createElement('a');
  
    // Set the href attribute to the Blob object
    a.href = URL.createObjectURL(fileData);
  
    // Set the download attribute with the desired file name
    a.download = 'example.txt';
  
    // Append the anchor element to the body
    document.body.appendChild(a);
  
    // Programmatically trigger a click event on the anchor element
    a.click();
  
    // Remove the anchor element from the DOM
    document.body.removeChild(a);
}