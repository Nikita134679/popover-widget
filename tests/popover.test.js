const puppeteer = require('puppeteer');

describe('Popover Widget', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/../src/index.html`);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Popover appears when button is clicked', async () => {
    const button = await page.$('#popover-button');
    await button.click();

    const popover = await page.$('.popover');
    expect(popover).not.toBeNull();
  });

  test('Popover contains correct title and content', async () => {
    const header = await page.$eval('.popover-header', el => el.textContent);
    const body = await page.$eval('.popover-body', el => el.textContent);

    expect(header).toBe('Popover Title');
    expect(body).toBe('This is the popover content.');
  });

  test('Popover disappears when button is clicked again', async () => {
    const button = await page.$('#popover-button');
    await button.click();

    const popover = await page.$('.popover');
    expect(popover).toBeNull();
  });
});
