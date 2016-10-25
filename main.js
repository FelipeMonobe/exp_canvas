let fs = require('fs');
let Canvas = require('canvas');
let Image = Canvas.Image;

fs.readFile(__dirname + '/image.jpg', (err, file) => {
  if (err) throw err;

  let img = new Image;
  img.src = file;

  let canvas = new Canvas(img.width, img.height, 'pdf');
  let ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0, img.width, img.height);
  ctx.addPage();

  fs.writeFile('out.pdf', canvas.toBuffer());
});
