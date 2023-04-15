import { ChangeEvent, MouseEvent, useState } from 'react';
import { Container, LiItem, PageNumbers, SelectLimit } from './styles';

interface IPaginationProps {
	totalNumberOfItems?: number;
	limitPerPage: number;
	currentPage: number;
	onCurrentPage: (page: number) => void;
	onLimitPerPage: (value: number) => void;
}
export default function Pagination({
	totalNumberOfItems = 200,
	limitPerPage,
	currentPage,
	onCurrentPage,
	onLimitPerPage,
}: IPaginationProps) {
	const [pageLimit] = useState<number>(5);
	const [maxPageLimitPage, setMaxPageLimitPage] = useState<number>(5);
	const [minPageLimitPage, setMinPageLimitPage] = useState<number>(0);

	const pages: number[] = [];
	for (let i = 1; i <= Math.ceil(totalNumberOfItems / limitPerPage); i++) {
		pages.push(i);
	}

	const renderPagesNumber = pages.filter((page: number) => {
		if (page < Number(maxPageLimitPage) + 1 && page > minPageLimitPage) {
			return page;
		}
	});

	function handlerCurrentPage(event: MouseEvent<HTMLLIElement>) {
		onCurrentPage(Number((event.target as HTMLLIElement).id));
	}

	function handlerCurrentPageCalc(value: number) {
		const newCurrentPage = currentPage + value;
		onCurrentPage(newCurrentPage);

		if (value < 0) {
			if (newCurrentPage % pageLimit === 0) {
				setMaxPageLimitPage(maxPageLimitPage - pageLimit);
				setMinPageLimitPage(minPageLimitPage - pageLimit);
			}
		} else {
			if (newCurrentPage > maxPageLimitPage) {
				setMaxPageLimitPage(maxPageLimitPage + pageLimit);
				setMinPageLimitPage(minPageLimitPage + pageLimit);
			}
		}
	}

	function pageDecrementBtn() {
		if (minPageLimitPage < 1) return null;

		return (
			<LiItem
				onClick={() => {
					handlerCurrentPageCalc(-1);
				}}
			>
				&hellip;
			</LiItem>
		);
	}

	function pageIncrementBtn() {
		if (pages.length <= maxPageLimitPage) return null;

		return (
			<LiItem
				onClick={() => {
					handlerCurrentPageCalc(+1);
				}}
			>
				&hellip;
			</LiItem>
		);
	}

	function handlerLimitPerPage(event: ChangeEvent<HTMLSelectElement>) {
		onLimitPerPage(Number(event.target.value));
	}

	return (
		<Container>
			<PageNumbers>
				<LiItem>
					<button
						onClick={() => {
							handlerCurrentPageCalc(-1);
						}}
						disabled={currentPage === pages[0] ? true : false}
					>
						Prev
					</button>
				</LiItem>

				{pageDecrementBtn()}
				{renderPagesNumber.map((page: number) => {
					return (
						<LiItem
							key={page}
							id={`${page}`}
							onClick={handlerCurrentPage}
							isCurrent={page === currentPage}
						>
							{page}
						</LiItem>
					);
				})}
				{pageIncrementBtn()}

				<LiItem>
					<button
						onClick={() => {
							handlerCurrentPageCalc(1);
						}}
						disabled={currentPage === pages[pages.length - 1] ? true : false}
					>
						Next
					</button>
				</LiItem>
			</PageNumbers>

			<label aria-label="Quantidade por pagina">
				<SelectLimit defaultValue={limitPerPage} onChange={handlerLimitPerPage}>
					<option value={5} label="5"></option>
					<option value={10} label="10"></option>
					<option value={15} label="15"></option>
					<option value={20} label="20"></option>
					<option value={25} label="25"></option>
					<option value={30} label="30"></option>
				</SelectLimit>
			</label>
		</Container>
	);
}
