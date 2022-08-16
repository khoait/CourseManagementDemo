/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var VUS;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/student/StudentForm.ts":
/*!*********************************************!*\
  !*** ./src/entities/student/StudentForm.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudentForm\": () => (/* binding */ StudentForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass StudentForm {\r\n    static showStudentName(executionContext) {\r\n        var _a, _b;\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const formContext = executionContext.getFormContext();\r\n            const name = (_b = (_a = formContext.getAttribute(\"vus_fullname\" /* vus_studentAttributes.vus_fullname */)) === null || _a === void 0 ? void 0 : _a.getValue()) !== null && _b !== void 0 ? _b : \"\";\r\n            yield Xrm.Navigation.openAlertDialog({ title: \"Current Student Name\", text: name, confirmButtonLabel: \"Okayyyy\" });\r\n        });\r\n    }\r\n    static validateStudentName(executionContext) {\r\n        var _a, _b;\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const formContext = executionContext.getFormContext();\r\n            const name = (_b = (_a = formContext.getAttribute(\"vus_fullname\" /* vus_studentAttributes.vus_fullname */)) === null || _a === void 0 ? void 0 : _a.getValue()) !== null && _b !== void 0 ? _b : \"\";\r\n            if (name.includes(\"Test JS\")) {\r\n                yield Xrm.Navigation.openAlertDialog({\r\n                    title: \"Invalid Student Name\",\r\n                    text: \"Student name must not contain Test JS\",\r\n                    confirmButtonLabel: \"Okay\",\r\n                });\r\n            }\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvc3R1ZGVudC9TdHVkZW50Rm9ybS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTSxXQUFXO0lBQ3RCLE1BQU0sQ0FBTyxlQUFlLENBQUMsZ0JBQXlDOzs7WUFDcEUsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEQsTUFBTSxJQUFJLEdBQ1IsdUJBQVcsQ0FBQyxZQUFZLHlEQUFvRSwwQ0FBRSxRQUFRLEVBQUUsbUNBQUksRUFBRSxDQUFDO1lBQ2pILE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDOztLQUNwSDtJQUVELE1BQU0sQ0FBTyxtQkFBbUIsQ0FBQyxnQkFBeUM7OztZQUN4RSxNQUFNLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0RCxNQUFNLElBQUksR0FDUix1QkFBVyxDQUFDLFlBQVkseURBQW9FLDBDQUFFLFFBQVEsRUFBRSxtQ0FBSSxFQUFFLENBQUM7WUFFakgsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO29CQUNuQyxLQUFLLEVBQUUsc0JBQXNCO29CQUM3QixJQUFJLEVBQUUsdUNBQXVDO29CQUM3QyxrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQixDQUFDLENBQUM7YUFDSjs7S0FtQkY7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL1ZVUy5Db3Vyc2UvLi9zcmMvZW50aXRpZXMvc3R1ZGVudC9TdHVkZW50Rm9ybS50cz84NzQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZ1c19zdHVkZW50QXR0cmlidXRlcywgdnVzX3N0dWRlbnRNZXRhZGF0YSB9IGZyb20gXCIuLi8uLi9kYXRhdmVyc2UtZ2VuL2VudGl0aWVzL3Z1c19zdHVkZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3R1ZGVudEZvcm0ge1xyXG4gIHN0YXRpYyBhc3luYyBzaG93U3R1ZGVudE5hbWUoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgbmFtZSA9XHJcbiAgICAgIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZTxYcm0uQXR0cmlidXRlcy5TdHJpbmdBdHRyaWJ1dGU+KHZ1c19zdHVkZW50QXR0cmlidXRlcy52dXNfZnVsbG5hbWUpPy5nZXRWYWx1ZSgpID8/IFwiXCI7XHJcbiAgICBhd2FpdCBYcm0uTmF2aWdhdGlvbi5vcGVuQWxlcnREaWFsb2coeyB0aXRsZTogXCJDdXJyZW50IFN0dWRlbnQgTmFtZVwiLCB0ZXh0OiBuYW1lLCBjb25maXJtQnV0dG9uTGFiZWw6IFwiT2theXl5eVwiIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIHZhbGlkYXRlU3R1ZGVudE5hbWUoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgbmFtZSA9XHJcbiAgICAgIGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZTxYcm0uQXR0cmlidXRlcy5TdHJpbmdBdHRyaWJ1dGU+KHZ1c19zdHVkZW50QXR0cmlidXRlcy52dXNfZnVsbG5hbWUpPy5nZXRWYWx1ZSgpID8/IFwiXCI7XHJcblxyXG4gICAgaWYgKG5hbWUuaW5jbHVkZXMoXCJUZXN0IEpTXCIpKSB7XHJcbiAgICAgIGF3YWl0IFhybS5OYXZpZ2F0aW9uLm9wZW5BbGVydERpYWxvZyh7XHJcbiAgICAgICAgdGl0bGU6IFwiSW52YWxpZCBTdHVkZW50IE5hbWVcIixcclxuICAgICAgICB0ZXh0OiBcIlN0dWRlbnQgbmFtZSBtdXN0IG5vdCBjb250YWluIFRlc3QgSlNcIixcclxuICAgICAgICBjb25maXJtQnV0dG9uTGFiZWw6IFwiT2theVwiLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsIHdlYiBhcGkgZnJvbSBzY3JpcHQgdXNpbmcgWHJtLldlYkFwaVxyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgY29uc3QgcmVzdWx0czIgPSBhd2FpdCBYcm0uV2ViQXBpLnJldHJpZXZlTXVsdGlwbGVSZWNvcmRzKFxyXG4gICAgLy8gICAgIHZ1c19zdHVkZW50TWV0YWRhdGEubG9naWNhbE5hbWUsXHJcbiAgICAvLyAgICAgYCRzZWxlY3Q9dnVzX2ZpcnN0bmFtZSx2dXNfbGFzdG5hbWUmJGZpbHRlcj0odnVzX2ZpcnN0bmFtZSBlcSAnJHtuYW1lfScpYCxcclxuICAgIC8vICAgKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0czIuZW50aXRpZXMpO1xyXG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIENhbGwgd2ViIGFwaSBmcm9tIHNjcmlwdCB1c2luZyBGZXRjaCBBUElcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFxyXG4gICAgLy8gICBgL2FwaS9kYXRhL3Y5LjIvdnVzX3N0dWRlbnRzPyRzZWxlY3Q9dnVzX2ZpcnN0bmFtZSx2dXNfbGFzdG5hbWUmJGZpbHRlcj0odnVzX2ZpcnN0bmFtZSBlcSAnJHtuYW1lfScpYCxcclxuICAgIC8vICk7XHJcbiAgICAvLyBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGpzb24pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/entities/student/StudentForm.ts\n");

/***/ }),

/***/ "./src/entries/StudentLibrary.ts":
/*!***************************************!*\
  !*** ./src/entries/StudentLibrary.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StudentForm\": () => (/* reexport safe */ _entities_student_StudentForm__WEBPACK_IMPORTED_MODULE_0__.StudentForm)\n/* harmony export */ });\n/* harmony import */ var _entities_student_StudentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/student/StudentForm */ \"./src/entities/student/StudentForm.ts\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cmllcy9TdHVkZW50TGlicmFyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4RCIsInNvdXJjZXMiOlsid2VicGFjazovL1ZVUy5Db3Vyc2UvLi9zcmMvZW50cmllcy9TdHVkZW50TGlicmFyeS50cz82ODExIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFN0dWRlbnRGb3JtIH0gZnJvbSBcIi4uL2VudGl0aWVzL3N0dWRlbnQvU3R1ZGVudEZvcm1cIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/entries/StudentLibrary.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/StudentLibrary.ts");
/******/ 	((VUS = typeof VUS === "undefined" ? {} : VUS).Course = VUS.Course || {}).StudentLibrary = __webpack_exports__;
/******/ 	
/******/ })()
;