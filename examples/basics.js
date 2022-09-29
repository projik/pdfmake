var fonts = {
	Roboto: {
		normal: 'fonts/SegoeUI-Regular.ttf',
		bold: 'fonts/SegoeUI-Bold.ttf',
		italics: 'fonts/SegoeUI-Italic.ttf',
		bolditalics: 'fonts/SegoeUI-BoldItalic.ttf'
	}
};

var PdfPrinter = require('../src/printer');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

var docDefinition = {
	content: [
		'First paragraph',
		'Another paragraph, (this time a little bit longer) to make sure, this line will be divided into at least two lines',
		'And another. This time it features some special characters ! @ # $ % ^ & * ( ) { } [ ] - + / ?',
		' 1 2 3 4 5 6 7 8 9 0'
	]
};

var pdfDoc = printer.createPdfKitDocument(docDefinition);
pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
pdfDoc.end();
