export const setData = (results) => ({
	type: 'SET_DATA',
	results
});

export const fetchItems = () => ({
	type: 'FETCH_ITEMS',
});

export const doneFetching = () => ({
	type: 'FETCH_ITEMS_SUCCESS',
});

export const failedFetching = () => ({
	type: 'FETCH_ITEMS_FAILS',
});
