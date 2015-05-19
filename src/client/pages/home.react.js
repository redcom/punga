import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link} from 'react-router';
import {msg} from '../intl/store';

export default class Home extends Component {

  render() {
    return (
      <DocumentTitle title={msg('home.title')}>
        <div className="home-page">
          <p>
            App starter kit for <a href="https://github.com/steida/este">
            Este.js</a>. Check <Link to="todos">todos</Link>.
          </p>
        </div>
      </DocumentTitle>
    );
  }

}
