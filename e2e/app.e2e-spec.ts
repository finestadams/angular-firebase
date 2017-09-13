import { AgpmpnPage } from './app.po';

describe('agpmpn App', () => {
  let page: AgpmpnPage;

  beforeEach(() => {
    page = new AgpmpnPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
