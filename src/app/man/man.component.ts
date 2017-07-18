import { Component, OnInit } from '@angular/core';
import { JiraApi } from 'jira-client';

@Component({
  selector: 'app-man',
  templateUrl: './man.component.html',
  styleUrls: ['./man.component.scss']
})
export class ManComponent implements OnInit {
jira: JiraApi;

  constructor() { }

  ngOnInit() {
    this.jira = new JiraApi({
      protocol: 'https',
      host: 'jira.hybris.com',
      username: 'will.sun@sap.com',
      password: 'Ihatepw20',
      apiVersion: '2',
      strictSSL: true
    });

    // test for get some data form jira server
    this.jira.findIssue('CAAS-1492')
      .then(issue => {
        console.log(`Status: ${issue.fields.status.name}`);
      })
      .catch(err => {
        console.error(err);
      });

  }

  testConnection() {
    console.log('test connection');
  }

}
