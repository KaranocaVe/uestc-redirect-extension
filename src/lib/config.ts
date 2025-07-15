import { UrlConvertConfig } from './types';

/** Default URL Convert Config */
export const URL_CONVERT_CONFIG: UrlConvertConfig = {
  KEY: 'wrdvpnisthebest!',
  IV: 'wrdvpnisthebest!',
  PROTOCOLS: ['http', 'https', 'ssh', 'vnc', 'telnet', 'rdp'],
  DECRYPT_FAILED_SEPARATOR: '__WEBVPN_CONVERTER_DEPCRYPT@RESULT',
};
