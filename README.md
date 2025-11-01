## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Automated PR Reviews with Claude

This repository uses Claude AI to automatically review pull requests for code quality, security, and best practices.

### Setup

To enable automated PR reviews, you need to add your Anthropic API key to the repository secrets:

1. Go to your repository **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Name: `ANTHROPIC_API_KEY`
4. Value: Your Anthropic API key (get it from [console.anthropic.com](https://console.anthropic.com))
5. Click **Add secret**

Once configured, Claude will automatically review all pull requests and provide feedback on:
- Code quality and Next.js best practices
- TypeScript type safety
- React 19 patterns
- Tailwind CSS organization
- Performance and accessibility
- Security vulnerabilities

The review will appear as a comment on your pull request within minutes of opening or updating it.
