$(document).ready(function () {
	var currentApartment;
	var currentFloor = 2;
	var floorPath = $(".home-img path")
	var counterUp = $(".counter-up");
	var counterDown = $(".counter-down");
	var modal = $(".modal");
	var modalClose = $(".modal-close-btn");
	var modalOpen = $(".btn-primary");
	var modalCounter = $(".modal-counter");
	var apartmentPath = $(".flats path");

	floorPath.on("mouseover", function () {
		floorPath.removeClass("current-floor");
		currentFloor = $(this).attr("data-floor");
		$(".counter").text(currentFloor);
	})

	floorPath.on("click", toggleModal)
	modalClose.on("click", toggleModal)
	modalOpen.on("click", toggleModal)


	counterUp.on("click", function () {
		if (currentFloor < 18) {
			currentFloor++;
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	})

	counterDown.on("click", function () {
		if (currentFloor > 2) {
			currentFloor--;
			usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
			$(".counter").text(usCurrentFloor);
			floorPath.removeClass("current-floor");
			$(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
		}
	})

	function toggleModal() {
		modal.toggleClass("is-open");
		modalCounter.text(currentFloor);
	}

	apartmentPath.on("mouseover", function () {
		currentApartment = $(this).attr("data-apartment");
		$(".flat-link").removeClass("flat-link-wanted");
		$(`[data-apartment-list=${currentApartment}]`).toggleClass("flat-link-wanted");
	})

	$(".flat-link").on("mouseover", function () {
		currentApartment = $(this).attr("data-apartment-list");
		apartmentPath.removeClass("current-apartment");
		$(`[data-apartment=${currentApartment}]`).toggleClass("current-apartment");
	})

	apartmentPath.on("mouseout", mouseOut)
	$(".flat-link").on("mouseout", mouseOut)


	function mouseOut() {
		$(".flat-link").removeClass("flat-link-wanted");
		apartmentPath.removeClass("current-apartment");
	}

	apartmentPath.on("click", apartmentClick)
	$(".flat-link").on("click", apartmentClick)

	function apartmentClick() {
		alert("Updates will be soon...");
	}

});