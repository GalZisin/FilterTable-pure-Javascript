
let inputStatus, inputGroups, filterStatus, filterGroups;

document.getElementById("myBtn").addEventListener("click", function () {
    let table, tr, td_status, td_groups, i;
    inputStatus = document.getElementById("statusDropdown");
    inputGroups = document.getElementById("groupsDropdown");
    filterStatus = inputStatus.value.toUpperCase();
    filterGroups = inputGroups.value.toUpperCase();
    if (filterStatus === "נמכר!") {
        filterStatus = "!נמכר";
    }
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    if (filterStatus === "ALLSTATUS" && filterGroups === "ALLGROUPS") {
        for (i = 0; i < tr.length; i++) {
            tr[i].style.display = "table-row";
        }
    } else {
        for (i = 1; i < tr.length; i++) {
            td_status = tr[i].getElementsByTagName("td")[5];
            td_groups = tr[i].getElementsByTagName("td")[1];
            if ((filterStatus === "ALLSTATUS" || td_status.innerHTML.toUpperCase().indexOf(filterStatus) > -1) &&
                (filterGroups === "ALLGROUPS" || td_groups.innerHTML.toUpperCase().indexOf(filterGroups) > -1)
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
});


function createFilterBoxStatus() {
    let li_el, span, li, element, el, hasChild;

    inputStatus = document.getElementById("statusDropdown");
    filterStatus = inputStatus.value.toUpperCase();
    if (filterStatus === "נמכר!") {
        filterStatus = "!נמכר";
    }
    element = document.getElementById("flexlist");
    hasChild = element.querySelector("#statusId") != null;

    if (filterStatus == "ALLSTATUS") {
        if (hasChild) {
            el = document.getElementById("statusId");
            el.remove();
        }
        return;
    }

    if (hasChild) {
        let prev_el = document.getElementById("statusId");
        let c = prev_el.childNodes;
        for (i = 0; i < c.length; i++) {
            if (c[i].id === undefined || c[i].id === "") {
                c[i].innerHTML = filterStatus;
            }
        }

        return;
    }

    li = document.createElement("li");
    span = document.createElement("div");
    spanText = document.createElement("div");
    spanText.classList.add("closeText");
    span.innerHTML = "&times;";
    spanText.innerHTML = filterStatus;
    li.setAttribute("id", "statusId");
    span.setAttribute("id", "spanStatusId");
    span.classList.add("close");
    span.addEventListener("click", closeBtn);
    li_el = element.appendChild(li);
    li_el.appendChild(spanText);
    li_el.appendChild(span);
}


function createFilterBoxGroups() {
    let li_el, span, spanText, li, element, el, hasChild;

    inputGroups = document.getElementById("groupsDropdown");
    filterGroups = inputGroups.value.toUpperCase();
    element = document.getElementById("flexlist");
    hasChild = element.querySelector("#groupsId") != null;

    if (filterGroups == "ALLGROUPS") {
        if (hasChild) {
            el = document.getElementById("groupsId");
            el.remove();
        }
        return;
    }


    if (hasChild) {
        let prev_el = document.getElementById("groupsId");
        let c = prev_el.childNodes;
        for (i = 0; i < c.length; i++) {
            if (c[i].id === undefined || c[i].id === "") {
                c[i].innerHTML = filterGroups;
            }
        }
        return;
    }

    li = document.createElement("li");
    span = document.createElement("div");
    spanText = document.createElement("div");
    spanText.classList.add("closeText");
    span.innerHTML = "&times;";
    spanText.innerHTML = filterGroups;
    li.setAttribute("id", "groupsId");
    span.setAttribute("id", "spanGroupsId");
    span.classList.add("close");
    span.addEventListener("click", closeBtn);
    li_el = element.appendChild(li);
    li_el.appendChild(spanText);
    li_el.appendChild(span);
}

function closeBtn() {
    let el;
    el = document.getElementById(this.id).parentElement;
    if (el.id === "statusId") {
        document.getElementById("statusDropdown").value = "AllStatus";
    } else if (el.id === "groupsId") {
        document.getElementById("groupsDropdown").value = "AllGroups";
    }
    el.remove();
}