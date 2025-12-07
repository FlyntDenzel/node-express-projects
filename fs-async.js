const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile("./content/new-result", `here is the third text which is the result ${first} and ${second}`, (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    });
  });
});
