import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Hello World</title>
				<meta name="description" content="App home" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Hello World</h1>
			</main>
		</div>
	)
}

export default Home
