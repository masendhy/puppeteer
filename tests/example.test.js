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
//         await page.waitFor(3000)
//         await page.waitForSelector('h1')
//         await page.reload()
//         await browser.close()

//     })
// })
//  ==================================================================================


// goBack & goForward

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com/')
//         await page.waitForSelector('h1')
//         await page.goto('https://dev.to/')
//         await page.waitForSelector('#sidebar-nav')
//         await page.goBack()
//         await page.waitForSelector('h1')
//         await page.goForward()
//         await page.waitForSelector('#sidebar-nav')
//         await browser.close()

//     })
// })
//  ==================================================================================


// type something

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('https://devexpress.github.io/testcafe/example/')
//         await page.type('#developer-name', 'Triman', {
//             delay: 500
//         })
//         await page.waitFor(5000)
//         await browser.close()

//     })
// })
//  ==================================================================================


// Click cek box
// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('https://devexpress.github.io/testcafe/example/')
//         await page.type('#developer-name', 'Triman', {
//             delay: 500
//         })
//         await page.click('#tried-test-cafe', {
//             clickCount: 1
//         })
//         await page.waitFor(5000)
//         await browser.close()

//     })
// })
//  ==================================================================================


// Select Box
// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('https://devexpress.github.io/testcafe/example/')
//         await page.type('#developer-name', 'Triman', {
//             delay: 500
//         })
//         await page.click('#tried-test-cafe', {
//             clickCount: 1
//         })
//         await page.select('#preferred-interface', 'Both')
//         await page.waitFor(5000)
//         await browser.close()

//     })
// })
//  ==================================================================================


// Fill message, click submit button , success alert

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('https://devexpress.github.io/testcafe/example/')
//         await page.type('#developer-name', 'Triman', {
//             delay: 500
//         })
//         await page.click('#tried-test-cafe', {
//             clickCount: 1
//         })
//         await page.select('#preferred-interface', 'Both')
//         // await page.type('#comments', 'I fill the text message') or
//         const message = 'I fill the text message'
//         await page.type('#comments', message)
//         await page.click('#submit-button')
//         await page.waitForSelector('.result-content')
//         await page.waitFor(5000)
//         await browser.close()

//     })
// })
//  ==================================================================================


// Find Title& Url

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         const title = await page.title()
//         const url = await page.url()

//         console.log('TITLE : ' + title);
//         console.log('Url : ' + url);

//         await browser.close()

//     })
// })
//  ==================================================================================


// Get element

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         const text = await page.$eval('h1', element => element.textContent)

//         console.log('Text in the H1 is : ' + text);

//         await browser.close()

//     })
// })
//  ==================================================================================


// Count the element

// const puppeteer = require('puppeteer')

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: false,
//             slowMo: 250,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         const text = await page.$eval('h1', element => element.textContent)
//         const count = await page.$$eval('p', element => element.length)

//         console.log('Text in the H1 is : ' + text);
//         console.log('Number of P tags on the page : ' + count);

//         await browser.close()

//     })
// })
//  ==================================================================================


// Find Title - Find Url & Get element, Count the element with puppeteer ( use expect on chai)

// const puppeteer = require('puppeteer')
// const expect = require('chai').expect

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: true,
//             slowMo: 10,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.goto('http://example.com')
//         const title = await page.title()
//         const url = await page.url()
//         const text = await page.$eval('h1', element => element.textContent)
//         const count = await page.$$eval('p', element => element.length)

//         expect(title).to.be.a('string', 'Example Domain')
//         expect(url).to.include('example.com')
//         expect(text).to.be.a('string', 'Example Domain')
//         expect(count).to.equal(2)
//         await browser.close()

//     })
// })
//  ==================================================================================


// Default TIme Out

// const puppeteer = require('puppeteer')
// const expect = require('chai').expect

// describe('First Puppeteer Test', () => {
//     it('should launch the browser', async function () {
//         const browser = await puppeteer.launch({
//             headless: true,
//             slowMo: 10,
//             devtools: false
//         })
//         const page = await browser.newPage()
//         await page.setDefaultTimeout(10000)
//         await page.setDefaultNavigationTimeout(20000)
//         await page.goto('http://example.com')
//         const title = await page.title()
//         const url = await page.url()
//         const text = await page.$eval('h1', element => element.textContent)
//         const count = await page.$$eval('p', element => element.length)

//         expect(title).to.be.a('string', 'Example Domain')
//         expect(url).to.include('example.com')
//         expect(text).to.be.a('string', 'Example Domain')
//         expect(count).to.equal(2)
//         await browser.close()

//     })
// })
//  ==================================================================================


// Keyboard press simulation

const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('First Puppeteer Test', () => {
    it('should launch the browser', async function () {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false
        })
        const page = await browser.newPage()
        await page.setDefaultTimeout(10000)
        await page.setDefaultNavigationTimeout(20000)
        await page.goto('http://example.com')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length)

        expect(title).to.be.a('string', 'Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string', 'Example Domain')
        expect(count).to.equal(2)

        await page.goto('http://zero.webappsecurity.com')
        await page.waitForSelector('#searchTerm')
        await page.type('#searchTerm', 'Transfer')
        await page.keyboard.press('Enter', {
            delay: 10
        })
        await page.waitFor(5000)

        await browser.close()

    })
})