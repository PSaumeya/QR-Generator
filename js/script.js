

let btnDownload = document.querySelector('.buttonTest');

 
 
// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
alert("inside addEventListener");
let img = document.querySelector('img');
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
 

function getFileName(str) {
    alert("inside getFileName");
    alert(str);
    var elem = str.target;
    var blob = dataURItoBlob(elem.getAttribute("href"));
    download(elem.getAttribute("download"), blob, blob.type);
   // DownloadToDevice(str);
    return str.substring(str.lastIndexOf('/') + 1)
}
