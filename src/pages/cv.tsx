import data from '../../content/data.json';
import React, { FC } from 'react';
import { Layout } from '../components/Layout';

export default function cv() {
	const { cv } = data;
	return (
		<Layout>
			<div> {cv[0]['artistName']}</div>
			<div> {cv[0]['name']}</div>
			<div> {cv[0]['bio']}</div>
		</Layout>
	);
}
