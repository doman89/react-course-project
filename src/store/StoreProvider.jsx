import React, { createContext, useEffect, useState } from 'react';

import request from '../helpers/request';

export const StoreContext = createContext(null);

const StoreProvider = ({ childern }) => {
	const [courses, setCourses] = useState([]);
	const [user, setUser] = useState(null);

	const fetchData = async () => {
		const { data } = await request.get('/courses');

		setCourses(data.courses);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<StoreContext.Provider value={
			courses,
			setCourses,
			user,
			setUser
		}>
			{childern}
		</StoreContext.Provider>
	);
};

export default StoreProvider;