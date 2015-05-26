import compression from 'compression';
import config from '../config';
import express from 'express';
// import favicon from 'serve-favicon';
import render from './render';

const app = express();

app.use(compression());
// TODO: Add favicon.
// app.use(favicon('assets/img/favicon.ico'))
// TODO: Move to CDN.
app.use('/build', express.static('build'));
app.use('/assets', express.static('assets'));

app.get('*', (req, res, next) => {
  const acceptsLanguages = req.acceptsLanguages(config.appLocales);
  const userState = {
    i18n: {
      locales: acceptsLanguages || config.defaultLocale
    }
  };
  render(req, res, userState)
    .catch(next);
});

app.on('mount', () => {
  console.log('Este.js is now available at path %s', app.mountpath);
});

export default app;
