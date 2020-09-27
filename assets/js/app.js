// Switch between Accounts Contants
function toggleSwitcher() {
	let checkBox = document.querySelector("#switch");
	let account = document.querySelector('.switcher .account');
	let contact = document.querySelector('.switcher .contact');
	if (!checkBox.checked) {
		contact.classList.remove('disabled');
		account.classList.add('disabled');
	} else {
		contact.classList.add('disabled');
		account.classList.remove('disabled');
	}
}

// Prevent Default button behavior inside popup cards component
$(".card-icp.dark.larg button").click(e => {
	e.preventDefault();
});

// Hide popup cards by clicking the cross or cancel button with their sub-cards
function hideCard(e) {
	// if ($(e.target).hasClass("parent-card"))
	$(e.target).closest(".card-icp.larg").next(".card-icp.larg").removeClass("show");
	$(e.target).closest(".card-icp").removeClass("show");
}
$(document).delegate(".close-card", 'click', (e) => {
	// if ($(e.target).hasClass("parent-card"))
	$(e.target).closest(".card-icp.larg").next(".card-icp.larg").removeClass("show");
	$(e.target).closest(".card-icp").removeClass("show");
});
$(document).delegate(".cancel", 'click', (e) => {
	$(e.target).closest(".card-icp.larg").next(".card-icp.larg").removeClass("show");
	$(e.target).closest(".card-icp").removeClass("show");
});

// Show popup add-card
$(".add-card-icp").click(() => {
	$(".card-icp.dark.larg.add-parent-card").addClass("show");
});

// Show popup buying center sub-card
$(".add-buying-center").click(() => {
	$(".card-icp.dark.larg.add-buying-card").addClass("show");
});

// 'More parent icp card' Component
const more_parent_icp =
	'<div class="card-icp dark parent-prop show">' +
	'<div class="head">' +
	'<div class="info">' +
	'<img src="assets/img/avatar.png" alt="" class="avatar">' +
	'<div>' +
	'<h4 class="title">Parent ICP</h4>' +
	'<div class="stars">' +
	'<img src="assets/img/icons/stars-4.svg" alt="">' +
	'</div>' +
	'</div>' +
	'</div>' +
	'<button class="close-card close-popup">' +
	'<img src="assets/img/icons/close.svg" alt="">' +
	'</button>' +
	'</div>' +
	'<div class="body">' +
	'<button class="edit-parent">Edit</button>' +
	'<button>Copy</button>' +
	'<button>Delete ICP</button>' +
	'<button class="add-parent">Add ChildICP</button>' +
	'</div>' +
	'</div>';

// 'sub-add parent icp card' Component
const add_parent_icp =
	'<div class="card-icp dark add-parent-popup show">' +
	'<div class="head">' +
	'<div class="info">' +
	'<img src="assets/img/avatar.png" alt="" class="avatar">' +
	'<div>' +
	'<h4 class="title">Parent ICP</h4>' +
	'<div class="stars">' +
	'<img src="assets/img/icons/stars-4.svg" alt="">' +
	'</div>' +
	'</div>' +
	'</div>' +
	'<button class="close-card remove-card">' +
	'<img src="assets/img/icons/close.svg" alt="">' +
	'</button>' +
	'</div>' +
	'<div class="body">' +
	'<h3 class="card-title">Add Parent ICP</h3>' +
	'<form>' +
	'<input type="text" placeholder="Copy 1" value="Mijo Luc">' +
	'<input type="text" placeholder="Copy 2">' +
	'<input type="text" placeholder="Copy 3">' +
	'<input type="text" placeholder="Copy 4">' +
	'<div class="action">' +
	'<input type="submit" value="Save">' +
	'<input type="button" value="Cancel" class="cancel remove-card">' +
	'</div>' +
	'</form>' +
	'</div>' +
	'</div>';

// 'sub-edit parent icp card' Component
const edit_parent_icp =
	'<div class="card-icp dark edit-parent-popup show">' +
	'<div class="head">' +
	'<div class="info">' +
	'<img src="assets/img/avatar.png" alt="" class="avatar">' +
	'<div>' +
	'<h4 class="title">Parent ICP</h4>' +
	'<div class="stars">' +
	'<img src="assets/img/icons/stars-4.svg" alt="">' +
	'</div>' +
	'</div>' +
	'</div>' +
	'<button class="close-card remove-card">' +
	'<img src="assets/img/icons/close.svg" alt="">' +
	'</button>' +
	'</div>' +
	'<div class="body">' +
	'<h3 class="card-title">Edit Parent ICP</h3>' +
	'<form>' +
	'<input type="text" placeholder="Copy 1" value="Mijo Luc">' +
	'<input type="text" placeholder="Copy 2">' +
	'<input type="text" placeholder="Copy 3">' +
	'<input type="text" placeholder="Copy 4">' +
	'<div class="action">' +
	'<input type="submit" value="Save">' +
	'<input type="button" value="Cancel" class="cancel remove-card">' +
	'</div>' +
	'</form>' +
	'</div>' +
	'</div>';

// 'More Child ICP' Toggle visibility
$(".more-child-icp").click(() => {
	$(".child-properties").toggleClass("show");
});

// Append 'More Parent ICP Card' Component to 'this' card
$(".more-parent-icp").click(e => {
	$(".parent-prop").remove();
	$(".children-popup").remove();
	$(e.target).closest(".card-icp").append(more_parent_icp);
});

// Add 'Edit Parent popup' visibility
$(document).delegate(".edit-parent", 'click', (e) => {
	const parent = $(e.target).closest(".card-icp.parent-icp");

	// Add Children Container if not exist
	if (!parent.children(".children-popup").length)
		parent.append("<div class='children-popup'></div>");

	// Add 'EditCard' if not exist on children container
	if (!parent.find(".edit-parent-popup").length)
		parent.children(".children-popup").append(edit_parent_icp);
});

// Add 'Add Parent popup' visibility
$(document).delegate(".add-parent", 'click', (e) => {
	const parent = $(e.target).closest(".card-icp.parent-icp");

	// Add Children Container if not exist
	if (!parent.children(".children-popup").length)
		parent.append("<div class='children-popup'></div>");

	// Add 'AddCard' if not exist on children container
	if (!parent.find(".add-parent-popup").length)
		parent.children(".children-popup").append(add_parent_icp);
});

// Remove Popup card and his children (sub-cards)
$(document).delegate(".close-popup", 'click', (e) => {
	const parent = $(e.target).closest(".card-icp.parent-icp");
	parent.children(".parent-prop").remove();
	parent.children(".children-popup").remove();
});

//Remove 'This' popup card
$(document).delegate(".remove-card", 'click', e => {
	$(e.target).closest(".card-icp").remove();
});
