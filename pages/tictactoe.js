import Link from 'next/link'
import Head from 'next/head'

import TicRow from '../components/TicTacToe/TicRow'
import TicCol from '../components/TicTacToe/TicCol'

export default () => (
	<React.Fragment>
	<Head>
		<meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>AdminLTE 2 | Starter</title>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          name="viewport"
        />
        <link
          rel="stylesheet"
          href="/static/bower_components/bootstrap/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="/static/bower_components/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/static/bower_components/Ionicons/css/ionicons.min.css"
        />
	</Head>
	<div className="container-fluid">
			<TicRow>
				<TicCol index="0" value="" />
				<TicCol index="1" value="" />
				<TicCol index="2" value="" />
			</TicRow>

			<TicRow>
				<TicCol index="3" value="" />
				<TicCol index="4" value="" />
				<TicCol index="5" value="" />
			</TicRow>

			<TicRow>
				<TicCol index="6" value="" />
				<TicCol index="7" value="" />
				<TicCol index="8" value="" />
			</TicRow>
	</div>
	</React.Fragment>
);
