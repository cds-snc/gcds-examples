// @ts-check
import { defineConfig } from 'astro/config';

// Static build: output in dist/, ready for S3 + CloudFront.
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
