const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    const filePath = "file://" + path.resolve("./index.html");

    await page.goto(filePath, { waitUntil: "networkidle0" });

    await page.pdf({
        path: "resume.pdf",
        format: "A4",
        printBackground: true
    });

    await browser.close();
})();