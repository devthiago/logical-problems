
export default class CollatzSequence {
	constructor(limit) {
		this.limit = limit || 1;
		this.store = [];

		this.rule = this.rule.bind(this);
		this.termsCounter = this.termsCounter.bind(this);
		this.getResult = this.getResult.bind(this);
	}

	rule(n) {
		if ( n % 2 === 0 ) {
			return n / 2;
		} else {
			return ( 3 * n ) + 1;
		}
	}

	termsCounter(number) {
		let count = 1,
			value = number;

		while ( value !== 1 ) {
			if ( !!this.store[value] ) {
				count += this.store[value] - 1;
				break;
			}
			value = this.rule(value);
			count ++;
		}

		store[number] = count;
		return count;
	}

	getResult() {
		let terms = 0,
			current = 0,
			number = null,
			count = 1;
		while ( count < this.limit ) {
			current = this.termsCounter(count);
			if ( current > terms ) {
				terms = current;
				number = count;
			}
			count ++;
		}
		return {
			number: number,
			terms: terms
		};
	}
}