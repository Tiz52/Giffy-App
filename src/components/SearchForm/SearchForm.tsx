import { FormEvent, memo, useState } from 'react';

interface Props {
	onSubmit: ({ keyword }: { keyword: string }) => void;
}

const SearchForm = ({ onSubmit: handleSubmitFromParent }:Props) => {
	const [keyword, setKeyword] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (keyword.length === 0) return;

		handleSubmitFromParent({ keyword });
	};

	const handleChange = (e: FormEvent<HTMLInputElement>) => {
		setKeyword(e.currentTarget.value);
	};

	return (
		<form onSubmit={ handleSubmit }>
			<button>Buscar</button>
			<input
				type='text'
				value={ keyword }
				onChange={ handleChange }
				placeholder='Search a gif here...'
			/>
		</form>
	);
};

export default memo(SearchForm);
