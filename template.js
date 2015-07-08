// Crude template replacement script, uses <span class='template' id='attribute...'> to identify fields to replace
// id can be terminated _### which will be ignored to avoid uniqueness issues.
// id can include .

function expandTemplate( data, templateClass )
{
    templateClass = templateClass || 'template';
    $('span.'+templateClass).each(function()
    {
        var id=this.id;
        if( ! id ) return;
        id=id.replace(/\_\d+$/,'');
        var d=data;
        id.split(".").forEach(function(field){ if( d != null ) d=d[field]; });
        if( d != null ) $(this).text(d.toString());
    });
}
