// An example configuration file
exports.config = {

    //фреймворк для тестов
    framework: 'jasmine',
    // адрес запущенного селениум сервера
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // выбор браузера с параметрами.
    capabilities: {
        browserName: 'chrome'
    },

    //колбэк который будет выполнен, когда протрактор готов к работе, но тесты еще не начали выполняться
    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');

        //Создание отчета
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        //Создание скриншота
        //jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example config.js).
    // They may include glob patterns.

    //пути к файлам сценариев тестов
    specs: ['./*-spec.js'],

    SELENIUM_PROMISE_MANAGER: false,

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
        defaultTimeoutInterval: 600000,
    },

};