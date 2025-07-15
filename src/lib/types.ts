// Define the data structure of the school list
export interface UrlConvertConfig {
  KEY: string;
  IV: string;
  PROTOCOLS: Protocol[];
  DECRYPT_FAILED_SEPARATOR: string;
}

type Protocol = 'http' | 'https' | 'ssh' | 'vnc' | 'telnet' | 'rdp';

export interface ConvertConfig {
  url: string | URL;
  schoolHost?: string;
  key?: string;
  iv?: string;
}
