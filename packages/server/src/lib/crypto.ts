import crypto from 'node:crypto'

import { base64UrlEncode } from '@socialgouv/e2esdk-crypto'

export function generateNonce() {
  return base64UrlEncode(crypto.randomBytes(32))
}
