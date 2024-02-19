const pdf_file = './pdf/overall.pdf'

function downloadFile() {

    const link = document.createElement('a');

    link.href = pdf_file;

    link.download = 'usefull_stuff.pdf';

    document.body.appendChild(link);

    link.click();
    
    document.body.removeChild(link);
}