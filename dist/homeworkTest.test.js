"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = require("selenium-webdriver");
var chromedriver = require("chromedriver");
var driver = new selenium_webdriver_1.Builder()
    .withCapabilities(selenium_webdriver_1.Capabilities.chrome())
    .build();
var bernice = selenium_webdriver_1.By.name("employee1");
var marnie = selenium_webdriver_1.By.name("employee2");
var phillip = selenium_webdriver_1.By.name("employee3");
var nameDisplay = selenium_webdriver_1.By.id("employeeTitle");
var nameInput = selenium_webdriver_1.By.name("nameEntry");
var phoneInput = selenium_webdriver_1.By.name("phoneEntry");
var titleInput = selenium_webdriver_1.By.name("titleEntry");
var saveButton = selenium_webdriver_1.By.id("saveBtn");
var cancelButton = selenium_webdriver_1.By.name("cancel");
var errorCard = selenium_webdriver_1.By.css(".errorCard");
describe("Employee Manager 1.2", function () {
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, driver.quit()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    describe("handles unsaved, canceled, and saved changes correctly", function () {
        test("An unsaved change doesn't persist", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0: 
                    /*
                    This test follows these steps:
                    1. Open Bernice Ortiz
                    2. Edit the name input
                    3. Open Phillip Weaver
                    4. Open Bernice Ortiz
                    5. Verify the name field is the original name
                    */
                    return [4 /*yield*/, driver.findElement(bernice).click()];
                    case 1:
                        /*
                        This test follows these steps:
                        1. Open Bernice Ortiz
                        2. Edit the name input
                        3. Open Phillip Weaver
                        4. Open Bernice Ortiz
                        5. Verify the name field is the original name
                        */
                        _p.sent();
                        _b = (_a = driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementIsVisible;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_p.sent()])])];
                    case 3:
                        _p.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).clear()];
                    case 4:
                        _p.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).sendKeys("Test Name")];
                    case 5:
                        _p.sent();
                        return [4 /*yield*/, driver.findElement(selenium_webdriver_1.By.name('phillip')).click()];
                    case 6:
                        _p.sent();
                        _f = (_e = driver).wait;
                        _h = (_g = selenium_webdriver_1.until).elementTextContains;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 7: return [4 /*yield*/, _f.apply(_e, [_h.apply(_g, [_p.sent(), "Phillip"])])];
                    case 8:
                        _p.sent();
                        return [4 /*yield*/, driver.findElement(bernice).click()];
                    case 9:
                        _p.sent();
                        _k = (_j = driver).wait;
                        _m = (_l = selenium_webdriver_1.until).elementTextContains;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 10: return [4 /*yield*/, _k.apply(_j, [_m.apply(_l, [_p.sent(), "Bernice"])])];
                    case 11:
                        _p.sent();
                        _o = expect;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 12: return [4 /*yield*/, (_p.sent()).getAttribute("")];
                    case 13:
                        _o.apply(void 0, [_p.sent()]).toBe("");
                        return [2 /*return*/];
                }
            });
        }); });
        test("A canceled change doesn't persist", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: 
                    /*
                    This test follows these steps:
                    1. Open Phillip Weaver
                    2. Edit the name input
                    3. Click cancel
                    5. Verify the name field is the original name
                    */
                    return [4 /*yield*/, driver.findElement(phillip).click()];
                    case 1:
                        /*
                        This test follows these steps:
                        1. Open Phillip Weaver
                        2. Edit the name input
                        3. Click cancel
                        5. Verify the name field is the original name
                        */
                        _f.sent();
                        _b = (_a = driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementIsVisible;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_f.sent()])])];
                    case 3:
                        _f.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).clear()];
                    case 4:
                        _f.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).sendKeys("Test Name")];
                    case 5:
                        _f.sent();
                        return [4 /*yield*/, driver.findElement(cancelButton).click()];
                    case 6:
                        _f.sent();
                        _e = expect;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 7: return [4 /*yield*/, (_f.sent()).getAttribute("")];
                    case 8:
                        _e.apply(void 0, [_f.sent()]).toBe("");
                        return [2 /*return*/];
                }
            });
        }); });
        test("A saved change persists", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0: 
                    /*
                    This test follows these steps:
                    1. Open Bernice Ortiz
                    2. Edit the name input
                    3. Save the change
                    4. Open Phillip Weaver
                    5. Open Bernice Ortiz's old record
                    5. Verify the name field is the edited name
                    */
                    return [4 /*yield*/, driver.findElement(bernice).click()];
                    case 1:
                        /*
                        This test follows these steps:
                        1. Open Bernice Ortiz
                        2. Edit the name input
                        3. Save the change
                        4. Open Phillip Weaver
                        5. Open Bernice Ortiz's old record
                        5. Verify the name field is the edited name
                        */
                        _k.sent();
                        _b = (_a = driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementIsVisible;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_k.sent()])])];
                    case 3:
                        _k.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).clear()];
                    case 4:
                        _k.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).sendKeys("Test Name")];
                    case 5:
                        _k.sent();
                        return [4 /*yield*/, driver.findElement(saveButton).click()];
                    case 6:
                        _k.sent();
                        return [4 /*yield*/, driver.findElement(phillip).click()];
                    case 7:
                        _k.sent();
                        _f = (_e = driver).wait;
                        _h = (_g = selenium_webdriver_1.until).elementTextContains;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 8: return [4 /*yield*/, _f.apply(_e, [_h.apply(_g, [_k.sent(), "Phillip"])])];
                    case 9:
                        _k.sent();
                        return [4 /*yield*/, driver.findElement(bernice).click()];
                    case 10:
                        _k.sent();
                        _j = expect;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 11: return [4 /*yield*/, (_k.sent()).getAttribute("value")];
                    case 12:
                        _j.apply(void 0, [_k.sent()]).toBe("Bernice Ortiz");
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("handles error messages correctly", function () {
        test("shows an error message for an empty name field", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: 
                    /*
                    This test follows these steps:
                    1. Open Bernice Ortiz
                    2. Clear the name input
                    3. Save the change
                    4. Verify the error is present
                    */
                    return [4 /*yield*/, driver.findElement(bernice).click()];
                    case 1:
                        /*
                        This test follows these steps:
                        1. Open Bernice Ortiz
                        2. Clear the name input
                        3. Save the change
                        4. Verify the error is present
                        */
                        _f.sent();
                        _b = (_a = driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementIsVisible;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_f.sent()])])];
                    case 3:
                        _f.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).clear()];
                    case 4:
                        _f.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).sendKeys(selenium_webdriver_1.Key.SPACE, selenium_webdriver_1.Key.BACK_SPACE)];
                    case 5:
                        _f.sent();
                        return [4 /*yield*/, driver.findElement(saveButton).click()];
                    case 6:
                        _f.sent();
                        return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(nameInput))];
                    case 7:
                        _f.sent();
                        _e = expect;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 8: return [4 /*yield*/, (_f.sent()).getText()];
                    case 9:
                        _e.apply(void 0, [_f.sent()]).toBe("The name field must be between 1 and 30 characters long.");
                        return [2 /*return*/];
                }
            });
        }); });
        test("lets you cancel out of an error message", function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0: 
                    /*
                    This test follows these steps:
                    1. Open Bernice Ortiz
                    2. Clear the name input
                    3. Save the change
                    4. Verify the error is present
                    5. Cancel the change
                    6. Verify the error is gone
                    */
                    return [4 /*yield*/, driver.findElement(bernice).click()];
                    case 1:
                        /*
                        This test follows these steps:
                        1. Open Bernice Ortiz
                        2. Clear the name input
                        3. Save the change
                        4. Verify the error is present
                        5. Cancel the change
                        6. Verify the error is gone
                        */
                        _g.sent();
                        _b = (_a = driver).wait;
                        _d = (_c = selenium_webdriver_1.until).elementIsVisible;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 2: return [4 /*yield*/, _b.apply(_a, [_d.apply(_c, [_g.sent()])])];
                    case 3:
                        _g.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).clear()];
                    case 4:
                        _g.sent();
                        return [4 /*yield*/, driver.findElement(nameInput).sendKeys(selenium_webdriver_1.Key.SPACE, selenium_webdriver_1.Key.BACK_SPACE)];
                    case 5:
                        _g.sent();
                        return [4 /*yield*/, driver.findElement(saveButton).click()];
                    case 6:
                        _g.sent();
                        return [4 /*yield*/, driver.wait(selenium_webdriver_1.until.elementLocated(nameInput))];
                    case 7:
                        _g.sent();
                        _e = expect;
                        return [4 /*yield*/, driver.findElement(nameInput)];
                    case 8: return [4 /*yield*/, (_g.sent()).getText()];
                    case 9:
                        _e.apply(void 0, [_g.sent()]).toBe("The name field must be between 1 and 30 characters long.");
                        return [4 /*yield*/, driver.findElement(nameInput).sendKeys(selenium_webdriver_1.Key.SPACE)];
                    case 10:
                        _g.sent();
                        return [4 /*yield*/, driver.findElement(saveButton).click()];
                    case 11:
                        _g.sent();
                        driver.wait(function () { return true; }, 500);
                        _f = expect;
                        return [4 /*yield*/, driver.findElements(nameInput)];
                    case 12:
                        _f.apply(void 0, [_g.sent()]).toHaveLength(0);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
