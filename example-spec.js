var angulario = require('./angularioPageOb.js');

describe('test page angular.io/docs/', function () {

    beforeEach(async function () {
        await browser.get('https://angular.io/docs/');
    });

    //тестирование верхнего меню
    describe('testing header', function () {

        it('testing header->features', async function () {
            await angulario.getFeatures.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/features');
        });

        it('testing header->resources', async function () {
            await angulario.getResources.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        });

        it('testing opening home page', async function () {
            await angulario.getHome.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/');
        });
    });

    //тестирование вертикального меню
    describe('testing left menu', function () {

        it('open menu', async function () {
            let classes = await angulario.OpenMenu.getAttribute('class');
            expect(classes).toContain('sidenav-open');
        });

        it('testing menu', async function () {
            await angulario.LeftButton.click();
            let EC = protractor.ExpectedConditions;
            await browser.wait(EC.invisibilityOf(angulario.Side));
            let classes = await angulario.OpenMenu.getAttribute('class');
            expect(classes).toContain('sidenav-closed');
        });

        it('testing left menu->GETTING STARTED', async function () {
            //await angulario.getListNavItems.get(0).click();
            await angulario.GettingStarted.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
        });
    });

    //тестирование нижнего меню
/*    describe('testing footer',async function () {

        it('testing Japanese localization',async function () {
            await angulario.getJapan.click();
            expect(browser.getCurrentUrl()).toEqual('https://angular.jp/');
        });
    });
*/

});