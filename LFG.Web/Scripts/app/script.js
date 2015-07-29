$(document).ready(function () {
    var url = "api/activities";
    // prepare the data
    var source =
    {
        datatype: "json",
        datafields: [
            { name: 'Name', type: 'string' },
            { name: 'Date', type: 'date' },
        ],
        url: "api/activities"
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    $("#jqxgrid").jqxGrid(
    {
        width: 850,
        source: dataAdapter,
        columnsresize: true,
        columns: [
          { text: 'Name', datafield: 'Name', width: 250 },
          { text: 'Date', datafield: 'Date', width: 250 },
        ]
    });
});