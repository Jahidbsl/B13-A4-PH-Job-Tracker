// count
function updateCounters() {

    const allCards = document.querySelectorAll('#job-cards .card');
    const totalCount = allCards.length;
    const interviewCount = document.querySelectorAll('.card[data-status ="interview"]');
    const rejectedCount = document.querySelectorAll('.card[data-status ="rejected"]');
    document.getElementById("total-count").innerText = totalCount;
    document.getElementById("total-job-count").innerText = totalCount;
    document.getElementById('interview-count').innerText = interviewCount.length;
    document.getElementById('rejected-count').innerText = rejectedCount.length;
}
// navbar toggle
function toggleStyle(id) {
    // console.log("toggle clicked")
    const buttons = document.querySelectorAll('.toggle-btn');
    for (btn of buttons) {
        btn.classList.remove("btn-primary");
    }
    const selected = document.getElementById(id);
    if (selected) {
        selected.classList.add("btn-primary");
    }
    // console.log(selected);

    const sectionEmpty = document.querySelector(".section-empty");
    const allCards = document.querySelectorAll('#job-cards .card');
    let visibleCount = 0;
    for (card of allCards) {
        const status = card.getAttribute('data-status');

        if (id === 'all-job' || status === id) {
            card.style.display = "block";
            visibleCount++;
        }
        else {
            card.style.display = "none";

        }
    }
    if (visibleCount === 0) {
        sectionEmpty.classList.remove('hidden');

    } else {
        sectionEmpty.classList.add("hidden");
    }

}

document.getElementById('job-cards').addEventListener('click', function (event) {
    const target = event.target;
    const card = target.closest('.card');


    if (target.classList.contains('fa-trash')) {
        const card = target.closest('.card');

        if (confirm(" Want to delete ?")) {
            card.remove();
            updateCounters();
        }


    }
    if (target.classList.contains('apply')) {
        const isApplied = target.innerText === "Applied";

        target.innerText = isApplied ? "Not Applied" : "Applied";
        target.classList.toggle("btn-primary", !isApplied);
    }

    if (target.innerText.toLowerCase() === 'interview' && target.classList.contains('btn-success')) {
        const applyBtn = card.querySelector('.apply');
        if (applyBtn && applyBtn.innerText === "Applied") {
            card.setAttribute('data-status', 'interview');
            alert("Status updated to Interview!");
            updateCounters();

        }
        else {
            alert("Apply first!")
        }
    }

    if (target.innerText.toLowerCase() === 'rejected' && target.classList.contains('btn-error')) {
        const card = target.closest('.card');
        card.setAttribute('data-status', 'rejected');
        alert("Status updated to Rejected");
        updateCounters();
    }


});


