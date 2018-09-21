export const fetchItems = async (contentType, searchStr) => {
	let param = 'page_title';
	if (contentType === 'page'){
		param = 'page_title';
	} else {
		param = contentType;
	}

	const url = `/hs-tool/search?${param}=${searchStr}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

export const fetchFormData = async (formId) => {
	const url = `/hs-tool/getFormData?formId=${formId}`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};