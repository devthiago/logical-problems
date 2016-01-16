#!/usr/bin/env node

const total = process.argv[2], store = {};

function rule ( n ) {
	if ( n % 2 === 0 ) {
		return n / 2;
	} else {
		return ( 3 * n ) + 1;
	}
}

function termsCounter ( number ) {
	var count = 1,
		value = number;

	while ( value !== 1 ) {

		if ( !!store[value] ) {
			count += store[value] - 1;
			break;
		}

		value = rule(value);
		count ++;
	}

	store[number] = count;
	return count; 
}

function main() {
	var terms = 0,
		current = 0,
		number = null,
		count = 1;
	while ( count < total ) {
		current = termsCounter(count);
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

const resp = main();
console.log('The longest chain is the number ' + resp.number + ', with ' + resp.terms + ' terms');