const puppeteer = require('puppeteer')


describe('currency exchange', () => {
    let browser
    let page


    before(async function () {
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 0,
            devtools: false
        })
        page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)

        await page.goto('http://zero.webappsecurity.com/bank/pay-bills.html')
        await page.waitForSelector('#login_form')
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click('#user_remember_me')
        await page.click('.btn-primary')

    })
    after(async function () {
        await browser.close()
    })

    it('Display Currency Exchange', async function () {
        await page.waitForSelector('.nav-tabs')
        await page.click('#pay_bills_tab')
        await page.waitForSelector('#tabs > ul > li:nth-child(3) > a')
        await page.click('#tabs > ul > li:nth-child(3) > a')
        await page.waitForSelector('.board')

    })

    it('Currency Exchange', async function () {
        await page.select('#pc_currency', 'EUR')
        await page.type('#pc_amount', '900')
        await page.click('#pc_inDollars_false')
        await page.click('#pc_calculate_costs')
        await page.waitForSelector('#pc_conversion_amount')
        await page.click('#purchase_cash')
        await page.waitForSelector('#alert_content')

    })
})