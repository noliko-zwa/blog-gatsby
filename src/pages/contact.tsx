import data from '../../content/data.json';
import React, { FC } from 'react';
import { Layout } from '../components/Layout';

const contact: FC = () => {
	const { contact } = data;
	return <Layout>{contact}</Layout>;
};

export default contact;
