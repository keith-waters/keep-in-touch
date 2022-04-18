import Head from 'next/head'
import styled from '@emotion/styled'
import CssBaseline from '@mui/material/CssBaseline'
import Paper from '@mui/material/Paper'
import Contact from '../components/Contact'

const Layout = styled(Paper)`
	max-width: 600px;
	text-align: center;
	margin: auto;
`

export default function Home() {
  return (
		<CssBaseline>
      <Head>
        <title>Keep in touch</title>
        <meta name="description" content="Keep in touch app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
				<Layout>
					<Contact />
				</Layout>
      </main>

      <footer>
      </footer>
    </CssBaseline>
  )
}
