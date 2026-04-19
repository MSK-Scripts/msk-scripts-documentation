---
title: Configuration
description: Configuration
sidebar_position: 3
---

## 🛠️ Configuration Reference

### Panel Interaction Type

Controls how users open tickets from the panel.

```json
"panel": {
  "interactionType": "BUTTON"    // "BUTTON" (default) or "SELECT_MENU"
}
```

| Mode            | Behaviour                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"BUTTON"`      | A green button is shown. Clicking it opens an ephemeral select menu — always fresh, no Discord caching issue.                                                                                  |
| `"SELECT_MENU"` | The select menu is shown directly in the panel. After every use it automatically resets to its default state, so users never need to restart Discord to open a second ticket of the same type. |

### Panel Logo & Banner

Optional images in the panel embed — place files in the `assets/` folder.

```json
"panel": {
  "logo": {
    "enabled": true,        // Show as thumbnail in the top-right of the embed
    "file": "logo.png"      // Filename inside assets/
  },
  "banner": {
    "enabled": true,        // Show as image at the bottom of the embed
    "file": "banner.png"    // Filename inside assets/
  }
}
```

Supported formats: PNG, JPG, GIF, WEBP. Run `/setup` again after adding or changing images.

### Channel State Overview

| State              | Channel Name             | Channel Topic                     | Opening Embed                         |
| ------------------ | ------------------------ | --------------------------------- | ------------------------------------- |
| Ticket opened      | `ticket-username`        | `🟡 Medium`                        | Priority: 🟡 Medium                    |
| `/priority urgent` | `ticket-username`        | `🔴 Urgent`                        | Priority: 🔴 Urgent                    |
| `/claim`           | `ticket-username`        | `🟡 Medium \| 🙋 Claimed by @Staff` | Priority: 🟡 Medium + Claimed by field |
| `/unclaim`         | `ticket-username`        | `🟡 Medium`                        | Priority: 🟡 Medium (field removed)    |
| Ticket closed      | `closed-ticket-username` | unchanged                         | all buttons removed                   |

> **Note on rate-limits:** Discord limits channel topic changes to 2 per 10 minutes per channel (same bucket as channel renames). A warning is shown in the ticket when a topic update is queued. The update will appear automatically once the limit resets.

### Ticket Types

```json
{
  "codeName": "support",          // Unique identifier (lowercase)
  "name": "Support",              // Display name in the menu
  "description": "...",           // Description in the selection menu
  "emoji": "💡",
  "color": "#ff0000",             // Hex color or "" to use mainColor
  "categoryId": "123456789",      // Discord category ID
  "ticketNameOption": "",         // Channel name template: USERNAME, USERID, TICKETCOUNT
  "customDescription": "...",     // Variables: REASON1, REASON2, USERNAME, USERID
  "cantAccess": ["roleId"],       // Roles that cannot access this type
  "staffRoles": [],               // Type-specific staff roles (see below)
  "askQuestions": true,
  "questions": [
    {
      "label": "Question",
      "placeholder": "Example...",
      "style": "SHORT",           // SHORT or PARAGRAPH
      "maxLength": 500
    }
  ]
}
```

**Note on `TICKETCOUNT`:** This is a global sequential counter across all tickets on the server — it never resets, even if tickets are closed. Each new ticket always gets a higher number than the previous one regardless of type or user.

### Type-specific Staff Roles (`staffRoles`)

Each ticket type can define its own staff roles, controlling who can see, manage and claim the ticket.

```json
// Only developers can see "Bug Report" tickets:
{ "codeName": "bugreport", "staffRoles": ["ROLE_ID_DEVELOPER"] }

// Leave empty → global rolesWhoHaveAccessToTheTickets are used:
{ "codeName": "support", "staffRoles": [] }
```

When moving a ticket (`/move`), permissions are automatically updated to match the new type. On ticket open, type-specific roles are pinged instead of the global `roleToPingWhenOpenedId`.

### Moving Tickets (`/move` & Button)

When more than one ticket type is configured, a **🔀 Move** button appears automatically in every ticket. Only staff can use it. Both the button and the `/move` command open a selection menu listing all other available types. After selecting, the channel is moved to the new category, permissions (including `staffRoles`) are updated, and a message is posted in the ticket.

### Staff Reminder

```json
"staffReminder": {
  "enabled": true,
  "afterHours": 4,     // Send reminder after X hours without any message
  "pingRoles": true    // Whether to @mention the staff roles of the ticket type
}
```

The bot checks all open tickets every **15 minutes**. Each ticket is only reminded **once** — no spam.

### Rating System

```json
"ratingSystem": {
  "enabled": true,
  "dmUser": true,
  "ratingsChannelId": "CHANNEL_ID_HERE"   // Channel where ratings are posted automatically
}
```

After closing, the ticket creator receives a 1–5 ⭐ rating request via DM. Once they rate, the result is automatically posted to `ratingsChannelId`.

### Auto-Close

```json
"autoClose": {
  "enabled": true,
  "inactiveHours": 48,       // Close after N hours without activity
  "warnBeforeHours": 6,      // Send a warning N hours beforehand
  "excludeClaimed": true     // Exclude claimed tickets from auto-close
}
```

### Statistics

`/stats` shows server-wide numbers. `/stats @user` shows a detailed profile split into two sections — **👤 As a User** (tickets opened, favourite type, average rating given) and **🛡️ As Staff** (tickets closed & claimed, average rating received — only shown if applicable).