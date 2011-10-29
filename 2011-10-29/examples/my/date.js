define(
	['exports', 'dojo/date/locale'],
	function(exports, locale){
		var shortPattern = { datePattern: 'MM/dd/yy', selector: 'date' },
			longPattern = { datePattern: 'MM/dd/yyyy', selector: 'date' };

		exports.parseShort = function(string){
			return locale.parse(string, shortPattern);
		};

		exports.parseLong = function(string){
			return locale.parse(string, longPattern);
		};

		exports.formatShort = function(date){
			return locale.format(string, shortPattern);
		};

		exports.formatLong = function(date){
			return locale.format(string, longPattern);
		};
	}
);
