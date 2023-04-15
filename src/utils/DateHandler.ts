export type IMonthNumberKey = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

class DateHandler {
	private readonly MONTH_NAME = {
		0: 'Janeiro',
		1: 'Fevereiro',
		2: 'Março',
		3: 'Abril',
		4: 'Maio',
		5: 'Junho',
		6: 'Julho',
		7: 'Agosto',
		8: 'Setembro',
		9: 'Outubro',
		10: 'Novembro',
		11: 'Dezembro',
	};

	public convertToCard(date: string | Date): string {
		if (typeof date === 'string') date = new Date(date);

		const monthName = this.MONTH_NAME[date.getMonth() as IMonthNumberKey];
		const day = this.addZero(date.getDate());

		return `${monthName.slice(0, 3)} ${day}, ${date.getFullYear()}`;
	}

	private addZero(value: number): string {
		return `${value >= 10 ? value : `0${value}`}`;
	}

	public clientFormat(date: Date | string): string {
		if (typeof date === 'string') date = new Date(date);

		return `${this.addZero(date.getDate())}/${this.addZero(
			date.getMonth() + 1
		)}/${date.getFullYear()}`;
	}
}

export default new DateHandler();
