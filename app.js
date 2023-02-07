const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const fs = require('fs');
  
  readLine.question(`Siapa Nama Kamu?`, name => {
    readLine.question(`Berapa Nomor Telepon?`, tlp => {
        readLine.question(`Tuliskan email kamu?`, email => {
            const contacts = JSON.parse(fs.readFileSync('contacts.json', 'utf-8'));
            const kontak = {
                name,
                tlp,
                email
            };
            contacts.push(kontak);
            const json = JSON.stringify(contacts);
            fs.writeFileSync('contacts.json',json);
            readLine.close;
        });
    });
});