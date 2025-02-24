# Waktime Proxy

## Table of Contents

- [Waktime Proxy](#waktime-proxy)
  - [Table of Contents](#table-of-contents)
  - [GET /stats/:username/:range](#get-statsusernamerange)
    - [Rule](#rule)
      - [:username](#username)
      - [:range](#range)
      - [headers: x-api-token](#headers-x-api-token)
    - [How to use](#how-to-use)
    - [Response API](#response-api)

## GET /stats/:username/:range

### Rule

#### :username

Get wakatime username: [https://wakatime.com/me](https://wakatime.com/me)  
Your username wakatime, example `@yourname`

#### :range

`last_7_days`, `last_30_days`, `last_6_months`, `last_year`, or `all_time`

#### headers: x-api-token

1. Register [https://wakatime.com/](https://wakatime.com/)
2. Get wakatime api key: [https://wakatime.com/settings/account](https://wakatime.com/settings/account)
3. Copy "Secret API Key"

### How to use

```ts
const res = await fetch(
  'https://wakatime-proxy.vercel.app/stats/@yappiii/all_time',
  {
    headers: { 'x-api-token': 'YOUR_WAKATIME_API_KEY' },
  },
);
const data = await res.json();
```

### Response API

[ [wakatime-response.d.ts](./src//wakatime-response.d.ts) ]

```ts
export type WakatimeResponse = {
  data: {
    id: string;
    user_id: string;
    range: string;
    start: string;
    end: string;
    timeout: number;
    writes_only: boolean;
    timezone: string;
    holidays: number;
    status: string;
    created_at: string;
    modified_at: string;
    human_readable_total_including_other_language: string;
    is_already_updating: boolean;
    categories: {
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    percent_calculated: number;
    is_up_to_date: boolean;
    human_readable_total: string;
    dependencies: {
      total_seconds: number;
      name: string;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    total_seconds_including_other_language: number;
    operating_systems: {
      total_seconds: number;
      name: string;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    daily_average: number;
    human_readable_daily_average_including_other_language: string;
    total_seconds: number;
    machines: {
      total_seconds: number;
      name: string;
      machine_name_id: string;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    editors: {
      total_seconds: number;
      name: string;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    is_up_to_date_pending_future: boolean;
    human_readable_daily_average: string;
    languages: {
      name: string;
      total_seconds: number;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    days_including_holidays: number;
    daily_average_including_other_language: number;
    projects: {
      total_seconds: number;
      name: string;
      percent: number;
      digital: string;
      decimal: string;
      text: string;
      hours: number;
      minutes: number;
    }[];
    days_minus_holidays: number;
    is_stuck: boolean;
    best_day: {
      date: string;
      total_seconds: number;
      text: string;
    };
    is_cached: boolean;
    username: string;
    is_including_today: boolean;
    human_readable_range: string;
    is_coding_activity_visible: boolean;
    is_language_usage_visible: boolean;
    is_editor_usage_visible: boolean;
    is_category_usage_visible: boolean;
    is_os_usage_visible: boolean;
  };
};
```
