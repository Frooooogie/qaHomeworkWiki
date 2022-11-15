import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();


class employeeManagerP {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    constructor(driver: WebDriver, url: string){
        this.driver = driver
        this.url = url


}}
import {employeeManagerPO} from "./EmployeePageObject";

const employeeMan = new employeeManagerPO(driver);

describe ("Employee Manager Test",  () => {
    beforeEach(async () => {
        await employeeMan.navigate();
    })
    afterAll(async () => {
        await driver.quit()
    })
    test("adding an employee", async () => {
        await driver.wait(until.elementLocated(employeeMan.header))
        await driver.findElement(employeeMan.addEmployee).click()
        await driver.findElement(employeeMan.newEmployee).click()
        await driver.findElement(employeeMan.nameInput).click()
        await driver.findElement(employeeMan.nameInput).clear()
        await driver.findElement(employeeMan.nameInput).sendKeys("Change this")
        await driver.findElement(employeeMan.phoneInput).click()
        await driver.findElement(employeeMan.phoneInput).clear()
        await driver.findElement(employeeMan.phoneInput).sendKeys("Change this")
        await driver.findElement(employeeMan.titleInput).click()
        await driver.findElement(employeeMan.titleInput).clear()
        await driver.findElement(employeeMan.titleInput).sendKeys("Change this")
})
})