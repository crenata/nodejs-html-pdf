const express = require("express");
const pdf = require("html-pdf");
const app = express();
const dateFormat = require("./helpers/dateFormat");
const html = require("./documents/report");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send({
        message: "OK",
        status: 200
    });
});
app.get("/generate-report", (req, res) => {
    pdf.create(html({
        date: dateFormat(new Date()),
        diameters: [
            {
                left: 4,
                right: 1
            },
            {
                left: 5,
                right: 2
            },
            {
                left: 6,
                right: 5
            },
            {
                left: 7,
                right: 10
            }
        ]
    }), {
        format: "A4",
        header: {
            height: "5mm"
        },
        childProcessOptions: {
            env: {
                OPENSSL_CONF: "/dev/null"
            }
        }
    }).toFile("report.pdf", (err) => {
        if (err) return console.log(err);
        res.sendFile(`${__dirname}/report.pdf`);
    });
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});
