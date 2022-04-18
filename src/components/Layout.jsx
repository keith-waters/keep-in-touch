import Head from 'next/head'
import styled from '@emotion/styled'
import CssBaseline from '@mui/material/CssBaseline'

const StyledDiv = styled.div`
	max-width: 600px;
	text-align: center;
	margin: auto;
`
export default function Layout(props) {
  return (
		<CssBaseline>
      <Head>
        <title>Keep in touch</title>
        <meta name="description" content="Keep in touch app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
				<StyledDiv>
					{props.children}	
				</StyledDiv>
      </main>
    </CssBaseline>
  )
}
