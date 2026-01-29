import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname, '../../..'),
    resolveAlias: {
      '@socialgouv/e2esdk-api': '../../../packages/api/src',
      '@socialgouv/e2esdk-client': '../../../packages/client/src',
      '@socialgouv/e2esdk-crypto': '../../../packages/crypto/src',
      '@socialgouv/e2esdk-devtools': '../../../packages/devtools/src',
      '@socialgouv/e2esdk-react': '../../../packages/react/src',
    },
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SERVER_SIGNATURE_PUBLIC_KEY: process.env.SIGNATURE_PUBLIC_KEY,
    NEXT_PUBLIC_DEPLOYMENT_URL: process.env.DEPLOYMENT_URL,
  },
}

export default nextConfig
