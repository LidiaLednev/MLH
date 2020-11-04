const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
describe('Inputs', function () {
    describe('Inputs are displayed', function () {
        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
    });
    describe('Placeholders are correct', function () {
    });
})

// const sel = require('../../data/selectors.json');
// const exp = require('../../data/expected.json');
//
// describe('Inputs', function () {
//
//     describe('Inputs are displayed', function () { //define sub-suite title by passing a string
//
//         it('TC-014 Name ', function () { //define test title by passing a string
//             browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
//             const name = $(sel.name).isDisplayed();
//                 expect(name).toEqual(true);
//         });
//
//         it('TC-015 Gender', function () {
//             const gender = $$('.ant-form-item-required')[0].isDisplayed();
//             expect(gender).toEqual(true);
//         });
//
//         it('TC-016 Age', function () {
//             const age = $$('.ant-form-item-required')[1].isDisplayed();
//             expect(age).toEqual(true);
//         });
//
//         it('TC-017 Story', function () {
//             const story = $$('.ant-form-item-required')[2].isDisplayed();
//             expect(story).toEqual(true);
//         });
//
//         it('TC-018 Create', function () {
//             const create = $$('.ant-form-item-required')[3].isDisplayed();
//             expect(create).toEqual(true);
//         });
//
//     });
// });