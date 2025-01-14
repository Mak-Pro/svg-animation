const PATENT_NUMBER_REGEX = /(?:(?:AF|OA|AP|AL|DZ|AD|AO|AI|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BX|BJ|BM|BT|BO|BA|BW|BV|BR|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|QZ|CO|KM|CG|CK|CR|CI|HR|CU|CY|CZ|KP|CD|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|EA|EP|FK|FO|FJ|FI|FR|GA|GM|GE|DE|GH|GI|GR|GL|GD|GT|GG|GN|GW|GY|HT|VA|HN|HU|IS|IN|ID|IB|WO|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MG|MW|MY|MV|ML|MT|MR|MU|MX|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|AN|NZ|NI|NE|NG|XN|MP|NO|EM|OM|PK|PW|PA|PG|PY|GC|PE|PH|PL|PT|QA|KR|MD|RO|RU|RW|SH|KN|LC|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SK|SI|SB|SO|ZA|GS|ES|LK|SD|SR|SZ|SE|CH|SY|TW|TJ|TH|MK|HK|TL|TG|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|TZ|US|UY|UZ|VU|VE|VN|VG|EH|YE|ZM|ZW|USRE)[\s-]?(?:(?:(?:18|19|20)[0-9]{2}|[0-9]{2})[./]?[0-9]{6,7}|(?:[0-9]{7,8}|D[0-9]{6,7}|PP[0-9]{5,6})|[0-9]{1,13})(?:[A-C][1-9]?)?)/;

export function isValidPatentNumber(patentNumber: string): boolean {
  const isValid = PATENT_NUMBER_REGEX.test(patentNumber);
  return isValid;
}
