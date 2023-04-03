import http from "http";
import fs from "fs";

const writeData = (path, data) => {
  fs.writeFileSync(path, data);
};

const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methonds",
    "GET,POST,DELETE,PUT,PATCH,OPTIONS"
  );
  response.setHeader("Acces-Control-Max-Age", 2592000);

  console.log("URL", url);
  console.log("Method", method);

  if (url.startsWith("/")) {
    response.setHeader("Content-Type", "text/html");
    response.write(`<h1>Student name: "Marko"</h1>
    <h1>Student last name: "Ingjikj"</h1>
    <h1>Academy: "Seavus"</h1>
    <h1>Subject: "Basic Node JS"</h1>`);
    response.end();
  }
});

server.listen(3000, () => {
  console.log(`Server is listening at http://localhost:3000`);
});
