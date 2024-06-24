import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

document.getElementById('convertBtn').addEventListener('click', () => {
    const inputFiles = document.getElementById('fileInput').files;
    const doc = new jsPDF();

    Array.from(inputFiles).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const imgData = e.target.result;
                if (index > 0) doc.addPage();
                doc.addImage(imgData, 'JPEG', 10, 10, img.width / 10, img.height / 10);
                if (index === inputFiles.length - 1) doc.save('output.pdf');
            };
        };
        reader.readAsDataURL(file);
    });
});