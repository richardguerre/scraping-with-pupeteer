const puppeteer = require("puppeteer");

const getPrice = async (stock) => {
  const browser = await puppeteer.launch({headless: false});
  const etoroPage = await browser.newPage();
  await etoroPage.setViewport({width: 1200, height: 720});
  await etoroPage.goto("https://etoro.com/watchlists")

  

  browser.close();
  return stock;
}

getPrice("TSLA").then((value) => {
  console.log(value)
})