# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🔄 Job Concurrency in GitHub Actions

## Definition

Job Concurrency GitHub Actions ka ek feature hai jo multiple workflow executions ko control karta hai. Yeh duplicate workflow runs ko prevent karta hai by grouping workflows aur zarurat padne par purani running workflow ko cancel karke latest workflow ko run karta hai.

---

## Use

* Duplicate workflow runs avoid karne ke liye
* Latest code changes par workflow run karne ke liye
* Simultaneous deployments ko prevent karne ke liye
* Workflow execution ko control karne ke liye

---

## Important Concepts

### 1. Concurrency

Concurrency GitHub Actions ka mechanism hai jo ek hi workflow ya job ki multiple executions ko manage karta hai.

### Syntax

```yaml
concurrency:
  group: deploy
  cancel-in-progress: true
```

---

### 2. Group

`group` concurrency group ka unique identifier hota hai.

Same group ki workflows ko GitHub ek category me treat karta hai aur unki execution ko control karta hai.

### Example

```yaml
concurrency:
  group: deploy
```

Yahan `deploy` group ka naam hai.

Agar multiple workflow runs same `deploy` group me aati hain, to GitHub unhe ek hi concurrency group ka hissa maanega.

---

### 3. cancel-in-progress

`cancel-in-progress` decide karta hai ki agar same group ki ek workflow pehle se run ho rahi ho aur nayi workflow trigger ho jaye to kya karna hai.

### Example

```yaml
cancel-in-progress: true
```

Matlab:

```text
Workflow 1 Running
        ↓
Workflow 2 Triggered
        ↓
Workflow 1 Cancel
        ↓
Workflow 2 Continue
```

---

## Complete Example

```yaml
name: foodie-Hub

on:
  push:
    branches:
      - main

concurrency:
  group: deploy
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Install Dependencies
        run: npm install

      - name: Build React App
        run: npm run build

      - name: Deploy App
        run: echo "Deploying app..."
```

---

## Workflow Execution

```text
Push 1
   ↓
Workflow Starts

Push 2
   ↓
Workflow Triggered

Same Group: deploy
   ↓
cancel-in-progress: true
   ↓
Old Workflow Cancelled
   ↓
Latest Workflow Continues
```

---

## Example Scenarios

### Scenario 1

```yaml
concurrency:
  group: deploy
  cancel-in-progress: true
```

Result:

* Old workflow cancel hogi
* Latest workflow run hogi

### Scenario 2

```yaml
concurrency:
  group: deploy
  cancel-in-progress: false
```

Result:

* Old workflow continue karegi
* New workflow queue me wait karegi

### Scenario 3

```yaml
concurrency:
  group: frontend
```

and

```yaml
concurrency:
  group: backend
```

Result:

* Dono workflows ek saath run kar sakti hain
* Kyunki groups alag hain

---

## Viva Questions

### What is Job Concurrency?

Job Concurrency is a feature that controls multiple workflow executions. It helps prevent duplicate workflow runs by grouping workflows and optionally cancelling older runs when a new run is triggered.

### What is the purpose of the group keyword?

`group` concurrency group ka unique identifier hota hai. Same group ki workflows ko GitHub ek category me treat karta hai aur unki execution control karta hai.

### What does cancel-in-progress: true do?

Agar same concurrency group ki ek workflow already run ho rahi ho aur nayi workflow trigger ho jaye, to purani workflow cancel ho jati hai aur latest workflow execute hoti hai.
