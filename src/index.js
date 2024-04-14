import puppeteer from "puppeteer";

const entrypoint = async () => {

    const browser = await puppeteer.launch();
    
    const page = await browser.newPage();

    await page.goto('https://developer.chrome.com/');
    await page.setViewport({width: 2380, height: 1024});

    await page.type('.devsite-search-field', 'automate beyond recorder');

    const searchResultSelector = '.devsite-result-item-link';
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    const textSelector = await page.waitForSelector('text/Customize and automate');
    const fullTitle = await textSelector?.evaluate(el => el.textContent);

    console.log('The title of this blog post is: ' + fullTitle);

    await browser.close();
}

entrypoint();
