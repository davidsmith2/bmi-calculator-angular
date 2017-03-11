import { BmiCalculatorAngular2Page } from './app.po';

describe('bmi-calculator-angular2 App', () => {
  let page: BmiCalculatorAngular2Page;

  beforeEach(() => {
    page = new BmiCalculatorAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
