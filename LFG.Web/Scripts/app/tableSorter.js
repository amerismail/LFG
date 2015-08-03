$(".sortable").click(function () {
    var o = $(this).hasClass('asc') ? 'desc' : 'asc';
    $('.sortable').removeClass('asc').removeClass('desc');
    $(this).addClass(o);

    var colIndex = $(this).prevAll().length;
    var tbod = $(this).closest("table").find("tbody");
    var rows = tbod.find("tr");

    rows.sort(function (a, b) {
        var A = $(a).find("td").eq(colIndex).text();
        var B = $(b).find("td").eq(colIndex).text();

        if (!isNaN(A)) A = Number(A);
        if (!isNaN(B)) B = Number(B);

        return o == 'asc' ? A > B : B > A;
    });

    $.each(rows, function (index, ele) {
        tbod.append(ele);
    });
});
