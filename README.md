# ShipForge Labs 🚀

> 🚀 QA Automation Jumpstart Framework
> Built by ShipForge Labs

**Forging Quality. Securing Launches.**

A practical QA automation starter framework for teams that want maintainable UI and API test coverage, CI integration, and a clean foundation for scaling quality engineering.

---

## 📌 Overview

This project demonstrates how to:

* Set up a scalable Cypress automation framework
* Cover critical user flows with UI tests
* Validate backend functionality with API tests
* Integrate tests into CI pipelines
* Provide clear reporting and maintainable structure

---

## 🎯 Who This Is For

* Teams relying mostly on manual QA
* Startups that need critical flow coverage quickly
* Engineering teams with little or no test automation
* Teams that want a maintainable test foundation without overengineering

---

## 🧰 Tech Stack

* Cypress
* TypeScript
* Node.js
* Mochawesome
* GitHub Actions / GitLab CI

---

## 📁 Project Structure

```text
cypress/
  e2e/
    ui/
    api/
    smoke/
  fixtures/
  support/
docs/
scripts/
```

---

## ⚙️ Quick Start

```bash
pnpm install
pnpm test:smoke
pnpm test:ui
pnpm test:api
```

---

## 🔐 Environment Setup

Copy `.env.example` to `.env` and update values:

```bash
BASE_URL=https://example-app.com
API_URL=https://api.example-app.com
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=change-me
```

---

## 🧪 Example Coverage

* Login flow
* Account or profile update flow
* Core application journey
* API health or authentication validation
* Smoke suite for CI

---

## 💡 Why This Approach

This project favors:

* Small, stable, high-value test suites
* Maintainability over quantity
* Reliability in CI over excessive coverage

---

## 🔁 CI Strategy

* Smoke tests run on pull requests
* Critical flows are validated on every merge
* Failures are surfaced quickly for faster feedback

---

## 🛣️ Roadmap

* Expand core flow coverage
* Improve test data management
* Add parallel execution
* Introduce visual or contract testing

---

## 📦 Scripts

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "test:ui": "cypress run --spec 'cypress/e2e/ui/**/*.cy.ts'",
    "test:api": "cypress run --spec 'cypress/e2e/api/**/*.cy.ts'",
    "test:smoke": "cypress run --spec 'cypress/e2e/smoke/**/*.cy.ts'",
    "report:merge": "node scripts/merge-reports.mjs"
  }
}
```

---

## 👨🏽‍💻 About ShipForge Labs

ShipForge Labs helps teams build reliable QA automation foundations for web and API systems, enabling faster, more confident releases.

[http://shipforgelabs.com/](https://shipforgelabs.com/)