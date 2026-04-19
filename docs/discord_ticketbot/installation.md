---
title: Installation
description: Installation
sidebar_position: 2
---

## 🚀 Installation

### Requirements
- **Node.js** v18 or newer
- A Discord bot token (https://discord.com/developers/applications)

### 1. Install dependencies

```bash
cd discord_ticketbot
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
```

Fill in `.env`:
```bash
TOKEN="your_bot_token"
CLIENT_ID="your_application_id"
GUILD_ID="your_server_id"
```

### 3. Set up the configuration

```bash
cp config/config.example.jsonc config/config.jsonc
```

Edit `config/config.jsonc` as needed — all fields are commented.

### 4. Start the bot

```bash
npm start
```

On first start the bot will automatically:
- Create the SQLite database at `data/tickets.db`
- Register all slash commands on your server

### 5. Set up the panel

Run `/setup` on your Discord server (Administrator permission required). The bot will send the ticket panel to the channel configured in `openTicketChannelId`.

---

## 🖥️ Autostart with systemd (Linux Server)

The included `ticketbot.service` file lets the bot start automatically after a server reboot.

### 1. Copy the bot files to the server

```bash
# Copy project folder to /opt
sudo cp -r discord_ticketbot /opt/discord_ticketbot

# Create a dedicated system user (recommended — never run as root)
sudo useradd -r -s /bin/false discord

# Set permissions
sudo chown -R discord:discord /opt/discord_ticketbot
```

### 2. Set up .env on the server

```bash
sudo nano /opt/discord_ticketbot/.env
```

### 3. Verify the Node.js path

```bash
which node
# Output e.g.: /usr/bin/node
```

If the path differs, adjust `ExecStart` in `ticketbot.service` accordingly.

### 4. Install the systemd unit

```bash
sudo cp /opt/discord_ticketbot/ticketbot.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now ticketbot.service
```

### 5. Check the status

```bash
# Show current status
sudo systemctl status ticketbot.service

# Follow live logs
sudo journalctl -u ticketbot.service -f
```

### Useful commands

| Command                                    | Description       |
| ------------------------------------------ | ----------------- |
| `sudo systemctl start ticketbot.service`   | Start the bot     |
| `sudo systemctl stop ticketbot.service`    | Stop the bot      |
| `sudo systemctl restart ticketbot.service` | Restart the bot   |
| `sudo systemctl enable ticketbot.service`  | Enable autostart  |
| `sudo systemctl disable ticketbot.service` | Disable autostart |
| `sudo journalctl -u ticketbot.service -f`  | Follow live logs  |
