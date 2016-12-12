import { AngularTeslaPage } from './app.po';

describe('angular-tesla App', function() {
  let page: AngularTeslaPage;

  beforeEach(() => {
    page = new AngularTeslaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
