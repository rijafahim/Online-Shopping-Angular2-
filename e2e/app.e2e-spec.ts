import { Assignment5Page } from './app.po';

describe('assignment5 App', () => {
  let page: Assignment5Page;

  beforeEach(() => {
    page = new Assignment5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
