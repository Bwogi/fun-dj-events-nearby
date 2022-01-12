import Link from 'next/link';
import React from 'react';

export default function about() {
	return (
		<div>
			<h1>About</h1>
			<p>This is an app to view events near you</p>
			<Link href='/'>Home</Link>
		</div>
	);
}
