/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    WEBHOOK_URL:
      "https://discord.com/api/webhooks/1029203236269342741/ugpwRWCMQ06Iz5x0nosTHnSTYIAL5X3J0SCTsbWQrO0JLttX87p5TjMdb8ltwsPypF1j",
  },
};

module.exports = nextConfig
