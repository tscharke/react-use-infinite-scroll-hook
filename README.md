![Create Release Workflow](https://github.com/tscharke/react-use-infinite-scroll-hook/actions/workflows/createRelease.yml/badge.svg?push=tags) ![Release](https://img.shields.io/github/v/release/tscharke/react-use-infinite-scroll-hook?display_name=release&label=Release)

# React useInfiniteScroll-Hook

React Hook to call an action if an intersected element was reached

## Prerequisites

- [Node][node]
- [pnpm][pnpm]

## Install

```bash
pnpm install react-use-infinite-scroll-hook

# Or the latest tarball from this repository
pnpm install https://github.com/tscharke/react-use-infinite-scroll-hook/releases/download/v1.0.1/react-use-infinite-scroll-hook-1.0.1.tar.gz
```

## Usage

```typescript jsx
import { useInfiniteScroll } from 'react-use-infinite-scroll-hook';

const fetchMoreData = async () => {
	const response = await fetch('https://dummyjson.com/products')

	return await response.json()
}

export const MyComponent = ({ data }) => {
	const scrollElementRef = useInfiniteScroll<HTMLSpanElement>(fetchMoreData)

	return (
		<section>
			{data.map(({ id, title }) => <div key={id}>${title}</div>)}
			<span ref={scrollElementRef} style={{ visibility: 'hidden', width: 0, height: 0 }} />
		</section>
	)
}
```

## 💻 Setup (on your machine)

```bash
# Check out the main-branch of this repository and switch into this directory
git clone git@github.com:tscharke/react-use-infinite-scroll-hook.git && cd "$(basename "$_" .git)"

# Install all dependencies
pnpm install

# Build module
pnpm run build

# Optional
# Run tests
pnpm run test

# Run linter
pnpm run lint
```

## ❤️🙏 Love & Thanks

Many thanks to [Denise Schaefer][denise] for here [useIntersection-Hook][intersection], on which this React Hook based.

[node]: https://nodejs.org/api/corepack.html

[pnpm]: https://pnpm.io

[denise]: https://github.com/denise-schaefer

[intersection]: https://github.com/denise-schaefer/useIntersection
