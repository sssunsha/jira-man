import { JiraManPage } from './app.po';

describe('jira-man App', () => {
  let page: JiraManPage;

  beforeEach(() => {
    page = new JiraManPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
