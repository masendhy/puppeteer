// test H1

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         await page.waitForSelector('h1')
//         await browser.close()

//     })
// })

//  ==================================================================================


// for slomotion browser add slowmo, for showing inspect add devTools:true

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 500,
//             devtools: true,
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         await page.waitForSelector('h1')
//         await browser.close()

//     })
// })

//  ==================================================================================


// PAUSING

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             // slowMo: 500,
//             // devtools: true,
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         await page.waitFor(10000)
//         await page.waitForSelector('h1')
//         await browser.close()

//     })
// })

//  ==================================================================================


// RELOAD

const puppeteer = require('puppeteer')

describe('First Puppeteer Test', () => {
    it('should launch the browser', async function () {
        const browser = await puppeteer.launch({
            headless: false,
            // slowMo: 500,
            // devtools: true,
        })
        const page = await browser.newPage()
        await page.goto('http://example.com')
        await page.waitFor(3000)
        await page.waitForSelector('h1')
        await page.reload()
        await browser.close()

    })
})