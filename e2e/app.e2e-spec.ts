import { CrudProjectPage } from './app.po';

describe('crud-project App', () => {
  let page: CrudProjectPage;

  beforeEach(() => {
    page = new CrudProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
