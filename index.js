const puppeteer = require('puppeteer');
const process = require('process');
const version = process.argv[2];

async function getLatestVersion(page, url) {
  await page.goto(url)
  return await page.evaluate(() => document.querySelector('div.release-entry a').textContent.trim())
}

(async () => {
  try {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox', 
        '--disable-setuid-sandbox'
      ]
    });
    const page = await browser.newPage();
    const latestVersion = await getLatestVersion(page, 'https://github.com/aws/aws-cli/releases');
    console.log(latestVersion)
    if (latestVersion === version) {
        process.exit(0)
    } else {
        process.exit(1)
    }
    browser.close()
  } catch (e) {
    console.log(e)
  }
})();