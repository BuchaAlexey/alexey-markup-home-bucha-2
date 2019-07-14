"use strict";

	function tAJAXStorage(lsKeyName) {
		var self = this;

		self.hashStorage = {};
		// ----------------------------------------------------------------------------------------------------------------------------------------------------
		$.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
			{type: "POST", cache: false, dataType: "json", data: {f: "READ", n: "Arniyazov_Atabay_Test_project"}, success: DataLoadedRead, error: ErrorHandler}
		);

		function DataLoadedRead(data) {			
			if (data !== " ") {
				self.hashStorage = JSON.parse(data.result);
				// ------------------------------------------------------------------
				console.log("DataLoadedRead - " + data.result);
				// ------------------------------------------------------------------
			} else if (data === " ") {
				$.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
					{type: "POST", cache: false, dataType: "json", data: {f: "INSERT", n: "Arniyazov_Atabay_Test_project", v: JSON.stringify(self.hashStorage)}, success: DataLoadedInsert, error: ErrorHandler}
				);

				function DataLoadedInsert(data) {
					// ------------------------------------------------------------------
					console.log("DataLoadedInsert - " + data.result);
					// ------------------------------------------------------------------
				}				
			}
		}
		// ----------------------------------------------------------------------------------------------------------------------------------------------------
		self.addValue = function(key, value) {
			self.hashStorage[key] = value;
			// ------------------------------------
			addValueOnTheServer(self.hashStorage);
			// ------------------------------------
		}

		self.getValue = function(key) {
			if (key in self.hashStorage) {
				return self.hashStorage[key];
			} else {
				return undefined;
			}
		}

		self.deleteValue = function(key) {
			if (key in self.hashStorage) {
				delete self.hashStorage[key];
				// ------------------------------------
				addValueOnTheServer(self.hashStorage);
				// ------------------------------------
				return true;
			} else {
				return false;
			}
		}

		self.getKeys = function() {
			var keys = [];
			for (var key in self.hashStorage) {
				keys.push(" " + key);
			}

			return keys;
		}
		// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		// функция которая будет сохранять на сервер изменённый хэш
		function addValueOnTheServer(hash) {
			var password = Math.random();

			$.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
				{type: "POST", cache: false, dataType: "json", data: {f: "LOCKGET", n: "Arniyazov_Atabay_Test_project", p: password}, success: DataLoadedLockget, error: ErrorHandler}
			);

			function DataLoadedLockget(data) {
				// ------------------------------------------------------------------
				console.log("DataLoadedLockget - " + data.result);
				// ------------------------------------------------------------------

				$.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
					{type: "POST", cache: false, dataType: "json", data: {f: "UPDATE", n: "Arniyazov_Atabay_Test_project", p: password, v: JSON.stringify(hash)}, success: DataLoadedUpdate, error: ErrorHandler}
				);

				function DataLoadedUpdate(data) {
					// ------------------------------------------------------------------
					console.log("DataLoadedUpdate - " + data.result);
					// ------------------------------------------------------------------
				}
			}	
		}

		function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
			alert(StatusStr + " " + ErrorStr);
		}
		// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	}