#!/usr/bin/env bash
# Build the Loopsun landing page and deploy it to the Hostinger VPS.
# The nginx container and Traefik routing live in /docker/loopsun on the VPS
# (mirrored from deploy/loopsun/). Restart, not reload: rsync replaces the
# bind-mounted nginx.conf, so a reload would keep reading the old file.
set -euo pipefail
cd "$(dirname "$0")/.."
npm run build:loopsun
ssh majengo-vps 'mkdir -p /docker/loopsun/app'
rsync -az deploy/loopsun/docker-compose.yml deploy/loopsun/nginx.conf majengo-vps:/docker/loopsun/
rsync -az --delete dist-loopsun/ majengo-vps:/docker/loopsun/app/
ssh majengo-vps 'cd /docker/loopsun && docker compose up -d && docker restart loopsun'
