# Frontend Mastery

A collection of frontend engineering challenges and projects focused on mastering JavaScript, TypeScript, React, Next.js, Vue, testing, accessibility, performance, and frontend architecture.

The goal of this repository is to build strong frontend fundamentals through hands-on implementation while practicing the same project setup, tooling, testing, and code-quality habits used in professional engineering teams.

## Repository Structure

```text
frontend-mastery/
├── javascript/
├── typescript/
├── react/
├── next-js/
└── vue/
```

Each directory contains independent challenge projects.

Examples:

```text
react/
├── giphy-search/
├── accordion/
└── data-table/

javascript/
├── debounce/
├── throttle/
└── promise-all/

typescript/
├── generics/
├── discriminated-unions/
└── type-safe-api/

next-js/
├── dashboard/
└── product-page/
```

## Project Philosophy

Each challenge is treated as an independent project.

A project may have its own:

- Node.js version
- Package manager
- Package manager version
- Dependencies
- Lockfile
- Framework
- Testing setup
- ESLint configuration
- Build tooling

This repository intentionally does not use a shared npm/pnpm workspace.

The goal is to practice working with independent frontend projects similar to working across multiple repositories in a large engineering organization.

## Environment Management

Node.js versions are managed with `nvm`.

Each project should include a `.nvmrc` file:

```text
24.19.0
```

Activate the correct Node version after entering a project:

```bash
nvm use
```

If the required version is not installed:

```bash
nvm install
```

Package manager versions are declared in each project's `package.json`.

Example:

```json
{
  "packageManager": "pnpm@10.33.2"
}
```

Projects may independently use:

- pnpm
- npm
- Yarn

Each project should contain exactly one corresponding lockfile.

## Running a Challenge

Navigate to the challenge:

```bash
cd react/giphy-search
```

Activate its Node version:

```bash
nvm use
```

Install dependencies using the project's package manager:

```bash
pnpm install
```

Run the project:

```bash
pnpm dev
```

The exact commands may differ by project. Refer to the challenge's individual `README.md`.

## Shared Repository Conventions

The repository shares a small set of project-independent conventions through:

- `.editorconfig` — editor and whitespace consistency
- `.prettierrc` — shared formatting preferences
- `.prettierignore` — files excluded from formatting
- `.gitattributes` — consistent Git line endings
- `.gitignore` — generated files and dependencies

Framework-specific tooling such as ESLint remains inside individual projects.

## Challenge Categories

### JavaScript

Focus areas include:

- Closures
- Arrays and objects
- Promises
- Async programming
- DOM APIs
- Debounce and throttle
- Event handling
- Functional programming
- Common frontend utilities

### TypeScript

Focus areas include:

- Type inference
- Interfaces and type aliases
- Generics
- Utility types
- Discriminated unions
- Type narrowing
- API modeling
- Type-safe application design

### React

Focus areas include:

- Components
- Props and state
- Hooks
- Forms
- Data fetching
- State management
- Accessibility
- Testing
- Performance
- Component architecture

### Next.js

Focus areas include:

- App Router
- Server Components
- Client Components
- Routing
- Data fetching
- Server Actions
- Rendering strategies
- Performance
- Application architecture

### Vue

Focus areas include:

- Components
- Composition API
- Reactivity
- State management
- Forms
- Routing
- Testing
- Accessibility

## Challenge Workflow

For each new challenge:

1. Create a dedicated project directory.
2. Add a `.nvmrc`.
3. Select and pin the package manager.
4. Install only the dependencies required by that project.
5. Implement the challenge.
6. Add tests where appropriate.
7. Verify linting and builds.
8. Document the solution and key learnings.
9. Commit the project's lockfile.
10. Push the completed challenge.

## Goals

This repository is intended to strengthen:

- Frontend fundamentals
- React and TypeScript fluency
- Problem-solving skills
- Accessibility awareness
- Testing discipline
- Performance reasoning
- Code organization
- Frontend system design
- Interview readiness
- Professional engineering workflows

## Challenge Sources

Challenges may be inspired by platforms such as @freecodecamp, @greatfrontend, @hello_interview, @javascriptmastery, @CodeSignal, LeetCode and other frontend engineering resources.

Implementations in this repository represent my own solutions and learning process.
