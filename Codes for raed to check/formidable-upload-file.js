const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Error parsing form ddata:', err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      const oldPath = files.filetoupload.path;
      const newPath = './uploads/' + files.filetoupload.name;

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error('Error moving the uploaded file:', err);
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('File uploaded and moved successfully!<br>');
        res.write('<a href="/">Back to Upload Form</a>');
        res.end();
      });
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="/upload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit" value="Upload File">');
    res.write('</form>');
    res.end();
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
