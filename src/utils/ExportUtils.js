import jsPDF from 'jspdf';
import htmlDocx from 'html-docx-js';

export const exportToPDF = (content) => {
    const doc = new jsPDF();
    doc.text(content, 10, 10);
    doc.save('document.pdf');
};

export const exportToWord = (content) => {
    const converted = htmlDocx.asBlob(content);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(converted);
    link.download = 'document.docx';
    link.click();
};