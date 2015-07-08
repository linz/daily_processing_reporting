
function CORS_summary( file, action )
{
    this.data={};
    this.loadSummary(file,action);
}

CORS_summary.prototype.loadSummary=function( file, action )
{
    var summary=this;
    $.ajax({ url:file,
            dataType: 'json',
            success: function(data){summary.data=data; action(summary); }
            });
}

CORS_summary.prototype.stations=function()
{
    var result=map(this.data.station_summary,function(d){return d.code});
    return result;
}

CORS_summary.prototype.stationData=function( code )
{
    var ss=this.data.station_summary;
    var nsummary=ss.length;
    for( var i=0; i<nsummary; i++ )
    {
        if( ss[i].code == code ) return ss[i];
    }
}
