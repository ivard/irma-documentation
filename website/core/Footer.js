/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  baseUrl(page) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}${page}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                height="52"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('what-is-irma')}>What is IRMA?</a>
            <a href={this.docUrl('getting-started')}>Getting started</a>
            <a href={this.docUrl('overview')}>Technical overview</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.baseUrl('about')}>Slack</a>
            <a href="https://twitter.com/irma_privacy" target="_blank" rel="noreferrer noopener">Twitter</a>
            <a href="https://github.com/privacybydesign">GitHub</a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.baseUrl('about')}>About</a>
            <a href="https://privacybydesign.foundation/attribute-index/en/">Attribute index</a>
            <a href="https://privacybydesign.foundation/en">Privacy by Design Foundation</a>
          </div>
        </section>

      </footer>
    );
  }
}

module.exports = Footer;
