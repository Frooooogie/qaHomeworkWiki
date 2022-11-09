import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })


    const hdrInput: By = By.id("hdrInput")
    const mkeInput: By = By.id("mkeInput")
    const oaiInput: By = By.id("oaiInput")
    const nameInput: By = By.id("nameInput")
    const clrBtn: By = By.id("clrBtn") 
    const submitBtn: By = By.id("submitBtn")
    const errorMsg: By = By.id("errorMsg")

    test("filling in the blanks for real", () => {
        await driver.findElement(hdrInput).sendKeys("Change this")
        await driver.findElement(mkeInput).sendKeys("change this")
        await driver.findElement(oaiInput).sendKeys("change this")
        await driver.findElement(nameInput).sendKeys("change this")
        await driver.findElement(submitBtn).click()
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})