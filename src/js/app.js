import { addClass, removeClass, toggleClass, siblings } from "./modules/helpers.js";


// removeClassFromAll = function(toggleAttr, targetAttr, className) {
//     var togglesArray = Array.from(document.querySelectorAll('[' + toggleAttr + ']'));
//     var targetsArray = Array.from(document.querySelectorAll('[' + targetAttr + ']'));
//     window.onclick = function(event) {
//         if (!togglesArray.includes(event.target)) {
//             targetsArray.forEach(function(item) {removeClass(item, className)});
//         }
//     }
// }

// toggleClassInGroup = function(toggleAttr, targetAttr, className) {
//     var togglesArray = Array.from(document.querySelectorAll('[' + toggleAttr + ']'));
//     var targetsArray = Array.from(document.querySelectorAll('[' + targetAttr + ']'));
//     togglesArray.forEach(function(item) {
//         item.addEventListener(
//             'click',
//             function(event) {
//                 var target = document.querySelectorAll(this.getAttribute(toggleAttr))[0];
//                 var otherTargets = targetsArray.filter(function(item) {
//                     return item != target;
//                 })
//                 otherTargets.forEach(function(item) {removeClass(item, className)});
//                 toggleClass(target, className);
//                 event.preventDefault();
//             },
//             false
//         );
//     });
// }

var toggleTarget = function(toggleAttr, className) {
    var togglesArray = Array.from(document.querySelectorAll('[' + toggleAttr + ']')); 
    togglesArray.forEach(function(item) {
        item.addEventListener(
            'click',
            function(event) {
                var target = document.querySelectorAll(this.getAttribute(toggleAttr))[0];
                toggleClass(target, className);
                event.preventDefault();
            },
            false
        );
    });

}

toggleTarget('data-toggle-menu', 'show');
toggleTarget('data-toggle-form', 'show');
