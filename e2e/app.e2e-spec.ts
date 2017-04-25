import { Ng4DashboardPage } from './app.po';

describe('ng4-dashboard App', () => {
  let page: Ng4DashboardPage;

  beforeEach(() => {
    page = new Ng4DashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
